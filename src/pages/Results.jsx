import { useState } from "react";
import KofiButton from "../components/KofiButton.jsx";
import PayPalButton from "../components/PayPalButton.jsx";
import { trackDonateClick } from "../analytics.js";
import { isUnlocked, savePendingState, startCheckout } from "../paywall.js";

const DOMAIN_COLORS = {
  "M365 Core Services & Security": "#38bdf8",
  "Data Protection & Governance": "#a78bfa",
  "Copilot & Agent Administration": "#34d399",
};

export default function Results({ results, initialReviewIdx = null, onRestart, onHome }) {
  const [reviewIdx, setReviewIdx] = useState(initialReviewIdx);
  const unlocked = isUnlocked();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const { answers, questions, timeUsed } = results;

  const handleUnlock = async () => {
    setCheckoutError(null);
    setCheckoutLoading(true);
    try {
      savePendingState({ context: "results", answers, timeUsed, reviewIdx });
      await startCheckout();
    } catch (err) {
      console.error(err);
      setCheckoutLoading(false);
      setCheckoutError("Something went wrong starting checkout. Please try again.");
    }
  };

  const score = questions.filter(q => answers[q.id] === q.correct).length;
  const pct = Math.round((score / questions.length) * 100);
  const scaled = Math.round(200 + (pct / 100) * 800);
  const passed = scaled >= 700;

  const domainResults = Object.keys(DOMAIN_COLORS).map(domain => {
    const qs = questions.filter(q => q.domain === domain);
    const correct = qs.filter(q => answers[q.id] === q.correct).length;
    return { domain, correct, total: qs.length, pct: Math.round((correct / qs.length) * 100) };
  });

  // Review single question
  if (reviewIdx !== null) {
    const rq = questions[reviewIdx];
    const ua = answers[rq.id];
    const dc = DOMAIN_COLORS[rq.domain];

    return (
      <div className="min-h-screen px-4 py-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-2xl mx-auto">
          <button onClick={() => setReviewIdx(null)}
            className="text-sm mb-5 flex items-center gap-1 transition-colors hover:text-sky-400"
            style={{ color: "var(--muted)" }}>
            ← Back to results
          </button>

          <div className="rounded-2xl p-5 mb-4"
            style={{ background: `${dc}10`, border: `1px solid ${dc}30` }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ background: `${dc}18`, color: dc, border: `1px solid ${dc}30` }}>
                {rq.domain}
              </span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                Question {reviewIdx + 1} of {questions.length}
              </span>
            </div>
            <p className="font-medium leading-relaxed" style={{ color: "var(--text)" }}>
              {rq.question}
            </p>
          </div>

          <div className="space-y-2.5 mb-5">
            {rq.options.map((opt, i) => {
              const isC = i === rq.correct;
              const isU = i === ua;
              return (
                <div key={i} className="rounded-xl p-3.5 flex items-start gap-3"
                  style={{
                    background: isC ? "rgba(16,185,129,0.1)" : isU && !isC ? "rgba(239,68,68,0.1)" : "var(--navy-mid)",
                    border: isC ? "1px solid rgba(16,185,129,0.4)" : isU && !isC ? "1px solid rgba(239,68,68,0.4)" : "1px solid #1e293b"
                  }}>
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: isC ? "#10b981" : isU && !isC ? "#ef4444" : "#1e293b",
                      color: isC || (isU && !isC) ? "#fff" : "var(--muted)"
                    }}>
                    {isC ? "✓" : isU && !isC ? "✗" : String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm"
                    style={{ color: isC ? "#6ee7b7" : isU && !isC ? "#fca5a5" : "var(--muted)" }}>
                    {opt}
                  </span>
                </div>
              );
            })}
          </div>

          {unlocked ? (
            <div className="rounded-xl p-4 mb-4"
              style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}>
              <p className="text-xs font-bold mb-1.5" style={{ color: "#38bdf8" }}>📚 Explanation</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#bae6fd" }}>{rq.explanation}</p>
              <a href={rq.source} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs rounded-lg px-3 py-1.5 hover:opacity-80"
                style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>
                🔗 {rq.sourceLabel}
              </a>
            </div>
          ) : (
            <div className="rounded-xl p-5 mb-4 text-center"
              style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.25)" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#fbbf24" }}>🔒 Explanation locked</p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                Unlock detailed explanations and Microsoft Learn source links for all 260 questions — one-time payment, yours forever.
              </p>
              <button onClick={handleUnlock} disabled={checkoutLoading}
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#1c1917" }}>
                {checkoutLoading ? "Redirecting to checkout…" : "🔓 Unlock explanations — €2.99"}
              </button>
              {checkoutError && (
                <p className="text-xs mt-2" style={{ color: "#fca5a5" }}>{checkoutError}</p>
              )}
            </div>
          )}

          <div className="flex gap-3">
            {reviewIdx > 0 && (
              <button onClick={() => setReviewIdx(r => r - 1)}
                className="flex-1 py-3 rounded-xl text-sm"
                style={{ background: "#1e293b", color: "var(--muted)", border: "1px solid #334155" }}>
                ← Previous
              </button>
            )}
            {reviewIdx < questions.length - 1 && (
              <button onClick={() => setReviewIdx(r => r + 1)}
                className="flex-1 py-3 rounded-xl text-sm"
                style={{ background: "#1e293b", color: "var(--muted)", border: "1px solid #334155" }}>
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "var(--navy)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Score card */}
        <div className="rounded-2xl p-8 text-center mb-5 fade-up"
          style={{
            background: passed ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
            border: passed ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(239,68,68,0.3)"
          }}>
          <div className="text-5xl mb-3">{passed ? "🎉" : "📚"}</div>
          <h2 className="text-2xl font-bold mb-1" style={{ color: passed ? "#6ee7b7" : "#fca5a5" }}>
            {passed ? "You Passed!" : "Keep Studying"}
          </h2>
          <div className="text-6xl font-bold my-3" style={{ color: passed ? "#34d399" : "#f87171" }}>
            {scaled}
          </div>
          <p className="text-sm" style={{ color: passed ? "#6ee7b7" : "#fca5a5", opacity: 0.7 }}>
            Estimated score · Pass mark: 700
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            {score} of {questions.length} correct ({pct}%)
          </p>
        </div>

        {/* Domain breakdown */}
        <div className="rounded-2xl p-5 mb-5"
          style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
          <h3 className="font-semibold text-white mb-4">Score by Domain</h3>
          {domainResults.map(({ domain, correct, total, pct: dp }) => {
            const c = DOMAIN_COLORS[domain];
            return (
              <div key={domain} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm" style={{ color: "var(--text)" }}>{domain}</span>
                  <span className="text-sm font-semibold" style={{ color: dp >= 70 ? "#34d399" : "#fbbf24" }}>
                    {correct}/{total} ({dp}%)
                  </span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "#0f172a" }}>
                  <div className="h-full rounded-full progress-bar"
                    style={{ width: `${dp}%`, background: c }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Question grid */}
        <div className="rounded-2xl p-5 mb-5"
          style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
          <h3 className="font-semibold text-white mb-3">Review All Questions</h3>
          <div className="grid grid-cols-10 gap-1.5">
            {questions.map((q, idx) => {
              const correct = answers[q.id] === q.correct;
              const answered = answers[q.id] !== undefined;
              return (
                <button key={q.id} onClick={() => setReviewIdx(idx)}
                  className="aspect-square rounded-md text-xs font-semibold transition-all hover:scale-110"
                  style={{
                    background: !answered ? "#1e293b" : correct ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)",
                    color: !answered ? "var(--muted)" : correct ? "#6ee7b7" : "#fca5a5",
                    border: !answered ? "1px solid #334155" : correct ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(239,68,68,0.4)"
                  }}>
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div className="flex gap-4 mt-3 text-xs" style={{ color: "#475569" }}>
            <span>🟩 Correct ({score})</span>
            <span>🟥 Wrong ({questions.length - score})</span>
            <span>Click any number to review</span>
          </div>
        </div>

{/* Ko-fi */}
<div className="rounded-2xl p-6 mb-5 text-center"
  style={{
    background: "rgba(56,189,248,0.05)",
    border: "1px solid rgba(56,189,248,0.2)"
  }}>
  <p className="text-2xl mb-2">☕</p>
  <h3 className="font-bold text-white mb-1" style={{ fontSize: "1.05rem" }}>
    {passed
      ? "You passed — AB900Prep helped get you there."
      : "Keep going — AB900Prep is here every step of the way."}
  </h3>
  <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
    No ads. Practicing stays free — a small one-time fee unlocks explanations to help cover hosting costs.
  </p>

    <a href="https://ko-fi.com/tzhawklaw"
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackDonateClick}
    className="inline-block font-semibold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
    style={{
      background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      color: "#1c1917",
      fontSize: "0.95rem"
    }}>
    ☕ Support AB900Prep
  </a>
  <div className="flex items-center gap-3 my-3 max-w-xs mx-auto">
    <div className="flex-1 h-px" style={{ background: "#1e293b" }}></div>
    <span className="text-xs" style={{ color: "#475569" }}>or</span>
    <div className="flex-1 h-px" style={{ background: "#1e293b" }}></div>
  </div>
  <PayPalButton id="paypal-donate-button-results" />
  <p className="text-xs mt-2" style={{ color: "#334155" }}>
    Takes 30 seconds · No account needed
  </p>
</div>
        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={onHome}
            className="flex-1 py-3 rounded-xl text-sm"
            style={{ background: "#1e293b", color: "var(--muted)", border: "1px solid #334155" }}>
            ← Home
          </button>
          <button onClick={onRestart}
            className="flex-1 py-3 rounded-xl font-semibold text-sm text-white hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #0284c7, #6366f1)" }}>
            Try Again
          </button>
        </div>

        <p className="text-xs text-center mt-4" style={{ color: "#334155" }}>
          Not affiliated with Microsoft Corporation · ab900prep.com
        </p>
      </div>
    </div>
  );
}

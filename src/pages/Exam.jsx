import { useState, useEffect, useCallback } from "react";
import QUESTIONS from "../questions.js";

const TOTAL_TIME = 240 * 60;

const DOMAIN_COLORS = {
  "M365 Core Services & Security": "#38bdf8",
  "Data Protection & Governance": "#a78bfa",
  "Copilot & Agent Administration": "#34d399",
};

export default function Exam({ onComplete, onHome }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [flagged, setFlagged] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showNav, setShowNav] = useState(false);

  const q = QUESTIONS[current];
  const domainColor = DOMAIN_COLORS[q.domain] || "#38bdf8";
  const progress = ((current + 1) / QUESTIONS.length) * 100;
  const mins = Math.floor(timeLeft / 60);
  const secs = String(timeLeft % 60).padStart(2, "0");
  const timerUrgent = timeLeft < 600;

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(t);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleFinish = useCallback(() => {
    onComplete({ answers, questions: QUESTIONS, timeUsed: TOTAL_TIME - timeLeft });
  }, [answers, timeLeft, onComplete]);

  const confirmAnswer = () => {
    if (selected === null) return;
    setAnswers(prev => ({ ...prev, [q.id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    setSelected(null);
    setConfirmed(false);
    if (current < QUESTIONS.length - 1) {
      setCurrent(c => c + 1);
    } else {
      handleFinish();
    }
  };

  const goPrev = () => {
    if (current === 0) return;
    const prevQ = QUESTIONS[current - 1];
    setSelected(answers[prevQ.id] ?? null);
    setConfirmed(answers[prevQ.id] !== undefined);
    setCurrent(c => c - 1);
  };

  const jumpTo = (idx) => {
    setSelected(answers[QUESTIONS[idx].id] ?? null);
    setConfirmed(answers[QUESTIONS[idx].id] !== undefined);
    setCurrent(idx);
    setShowNav(false);
  };

  const toggleFlag = () => {
    setFlagged(prev => {
      const n = new Set(prev);
      n.has(q.id) ? n.delete(q.id) : n.add(q.id);
      return n;
    });
  };

  const answered = Object.keys(answers).length;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--navy)" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between"
        style={{ background: "var(--navy-mid)", borderBottom: "1px solid #1e293b" }}>
        <div className="flex items-center gap-3">
          <button onClick={onHome} className="text-xs px-2 py-1 rounded-lg transition-colors"
            style={{ color: "var(--muted)", background: "#0f172a" }}>
            ← Home
          </button>
          <span className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            {current + 1}
            <span style={{ color: "#334155" }}> / {QUESTIONS.length}</span>
          </span>
        </div>

        <div className={`font-mono font-bold text-base px-3 py-1.5 rounded-lg ${timerUrgent ? "animate-pulse" : ""}`}
          style={{
            background: timerUrgent ? "rgba(239,68,68,0.2)" : "#0f172a",
            color: timerUrgent ? "#fca5a5" : "var(--text)",
            border: timerUrgent ? "1px solid rgba(239,68,68,0.3)" : "1px solid #1e293b"
          }}>
          {mins}:{secs}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs hidden sm:inline" style={{ color: "#475569" }}>
            {answered}/{QUESTIONS.length} answered
          </span>
          <button onClick={() => setShowNav(!showNav)}
            className="text-xs px-2 py-1 rounded-lg transition-colors"
            style={{ color: "var(--muted)", background: "#0f172a", border: "1px solid #1e293b" }}>
            {showNav ? "✕ Close" : "≡ All"}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5" style={{ background: "#1e293b" }}>
        <div className="h-full progress-bar transition-all"
          style={{ width: `${progress}%`, background: domainColor }}></div>
      </div>

      {/* Nav overlay */}
      {showNav && (
        <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={() => setShowNav(false)}>
          <div className="w-full max-w-lg p-4 rounded-t-2xl sm:rounded-2xl m-0 sm:m-4"
            style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}
            onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-white text-sm">Question Navigator</p>
              <button onClick={() => setShowNav(false)} style={{ color: "var(--muted)" }}>✕</button>
            </div>
            <div className="grid grid-cols-10 gap-1.5 mb-3">
              {QUESTIONS.map((q2, idx) => {
                const isAns = answers[q2.id] !== undefined;
                const isFlag = flagged.has(q2.id);
                const isCur = idx === current;
                return (
                  <button key={q2.id} onClick={() => jumpTo(idx)}
                    className="aspect-square rounded-md text-xs font-semibold transition-all"
                    style={{
                      background: isCur ? domainColor : isAns ? "rgba(16,185,129,0.2)" : "#0f172a",
                      color: isCur ? "#0f172a" : isAns ? "#6ee7b7" : "var(--muted)",
                      border: isFlag ? "2px solid #f59e0b" : "1px solid #1e293b",
                    }}>
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-4 text-xs" style={{ color: "#475569" }}>
              <span>🟩 Answered ({answered})</span>
              <span>⬛ Unanswered ({QUESTIONS.length - answered})</span>
              <span>🟡 Flagged ({flagged.size})</span>
            </div>
            <button onClick={handleFinish}
              className="w-full mt-4 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #0284c7, #6366f1)" }}>
              Submit Exam
            </button>
          </div>
        </div>
      )}

      {/* Question area */}
      <div className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
        <div className="fade-up">
          {/* Domain + flag */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: `${domainColor}18`,
                border: `1px solid ${domainColor}40`,
                color: domainColor
              }}>
              {q.domain}
            </span>
            <button onClick={toggleFlag}
              className="text-xs px-3 py-1 rounded-lg transition-colors"
              style={{
                background: flagged.has(q.id) ? "rgba(245,158,11,0.15)" : "#0f172a",
                color: flagged.has(q.id) ? "#fcd34d" : "var(--muted)",
                border: flagged.has(q.id) ? "1px solid rgba(245,158,11,0.3)" : "1px solid #1e293b"
              }}>
              {flagged.has(q.id) ? "🚩 Flagged" : "⚑ Flag"}
            </button>
          </div>

          {/* Question */}
          <div className="rounded-2xl p-5 mb-5"
            style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
            <p className="text-white font-medium leading-relaxed">{q.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-5">
            {q.options.map((opt, i) => {
              const isSel = selected === i;
              const isCC = confirmed && i === q.correct;
              const isCW = confirmed && isSel && i !== q.correct;
              const isNeutral = confirmed && !isCC && !isCW;

              return (
                <button key={i} disabled={confirmed} onClick={() => setSelected(i)}
                  className="option-card w-full text-left rounded-xl p-4 flex items-start gap-3"
                  style={{
                    background: isCC ? "rgba(16,185,129,0.12)" : isCW ? "rgba(239,68,68,0.12)" : isSel ? `${domainColor}18` : "var(--navy-mid)",
                    border: isCC ? "1px solid rgba(16,185,129,0.5)" : isCW ? "1px solid rgba(239,68,68,0.5)" : isSel ? `1px solid ${domainColor}60` : "1px solid #1e293b",
                    cursor: confirmed ? "default" : "pointer",
                    opacity: isNeutral && !isSel ? 0.6 : 1,
                  }}>
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{
                      background: isCC ? "#10b981" : isCW ? "#ef4444" : isSel ? domainColor : "#1e293b",
                      color: isCC || isCW || isSel ? "#fff" : "var(--muted)"
                    }}>
                    {isCC ? "✓" : isCW ? "✗" : String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm leading-relaxed"
                    style={{ color: isCC ? "#6ee7b7" : isCW ? "#fca5a5" : isSel ? "var(--text)" : "var(--muted)" }}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation + source */}
          {confirmed && (
            <div className="rounded-xl p-4 mb-5 fade-up"
              style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}>
              <p className="text-xs font-bold mb-1.5" style={{ color: "#38bdf8" }}>📚 Explanation</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#bae6fd" }}>
                {q.explanation}
              </p>
              <a href={q.source} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs rounded-lg px-3 py-1.5 transition-opacity hover:opacity-80"
                style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>
                🔗 {q.sourceLabel}
              </a>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3">
            <button onClick={goPrev} disabled={current === 0}
              className="px-4 py-3 rounded-xl text-sm transition-colors disabled:opacity-30"
              style={{ background: "#1e293b", color: "var(--muted)", border: "1px solid #334155" }}>
              ←
            </button>
            {!confirmed ? (
              <button onClick={confirmAnswer} disabled={selected === null}
                className="flex-1 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-30"
                style={{ background: "linear-gradient(135deg, #0284c7, #6366f1)" }}>
                Confirm Answer
              </button>
            ) : (
              <button onClick={goNext}
                className="flex-1 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "#1e293b", color: "var(--text)", border: "1px solid #334155" }}>
                {current < QUESTIONS.length - 1 ? "Next Question →" : "Finish Exam →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

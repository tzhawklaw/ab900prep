import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Exam from "./pages/Exam.jsx";
import Results from "./pages/Results.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import QUESTIONS from "./questions.js";
import { loadPendingState, clearPendingState, setUnlocked, verifyPaymentSession } from "./paywall.js";

export default function App() {
  const [page, setPage] = useState("home"); // home | exam | results | disclaimer
  const [examResults, setExamResults] = useState(null);
  const [resultsReviewIdx, setResultsReviewIdx] = useState(null);
  const [examResumeState, setExamResumeState] = useState(null);

  const handleExamComplete = (results) => {
    setExamResults(results);
    setResultsReviewIdx(null);
    setPage("results");
  };

  // Restore state after a round trip to Stripe's hosted checkout — the browser fully
  // navigates away and back, so in-memory state is gone. Pending state is only ever
  // saved right before redirecting to Stripe, so its mere presence is enough to
  // restore — this covers both the successful-payment redirect AND cancelling,
  // since Stripe's own "back" link doesn't reliably carry our cancel_url query param.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    (async () => {
      if (sessionId) {
        const paid = await verifyPaymentSession(sessionId);
        if (paid) setUnlocked();
      }

      const pending = loadPendingState();
      if (pending?.context === "results") {
        setExamResults({ answers: pending.answers, questions: QUESTIONS, timeUsed: pending.timeUsed });
        setResultsReviewIdx(pending.reviewIdx ?? null);
        setPage("results");
        clearPendingState();
      } else if (pending?.context === "exam") {
        setExamResumeState({
          answers: pending.answers,
          flagged: pending.flagged,
          current: pending.current,
          timeLeft: pending.timeLeft,
        });
        setPage("exam");
        clearPendingState();
      }

      if (sessionId) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--navy)" }}>
      {page === "home" && (
        <Home
          onStart={() => { setExamResumeState(null); setPage("exam"); }}
          onDisclaimer={() => setPage("disclaimer")}
        />
      )}
      {page === "exam" && (
        <Exam
          onComplete={handleExamComplete}
          onHome={() => setPage("home")}
          resumeState={examResumeState}
        />
      )}
      {page === "results" && (
        <Results
          results={examResults}
          initialReviewIdx={resultsReviewIdx}
          onRestart={() => { setExamResumeState(null); setPage("exam"); }}
          onHome={() => setPage("home")}
        />
      )}
      {page === "disclaimer" && (
        <Disclaimer onBack={() => setPage("home")} />
      )}
    </div>
  );
}

import { useState } from "react";
import Home from "./pages/Home.jsx";
import Exam from "./pages/Exam.jsx";
import Results from "./pages/Results.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";

export default function App() {
  const [page, setPage] = useState("home"); // home | exam | results | disclaimer
  const [examResults, setExamResults] = useState(null);

  const handleExamComplete = (results) => {
    setExamResults(results);
    setPage("results");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--navy)" }}>
      {page === "home" && (
        <Home
          onStart={() => setPage("exam")}
          onDisclaimer={() => setPage("disclaimer")}
        />
      )}
      {page === "exam" && (
        <Exam
          onComplete={handleExamComplete}
          onHome={() => setPage("home")}
        />
      )}
      {page === "results" && (
        <Results
          results={examResults}
          onRestart={() => setPage("exam")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "disclaimer" && (
        <Disclaimer onBack={() => setPage("home")} />
      )}
    </div>
  );
}

import KofiButton from "../components/KofiButton.jsx";

const DOMAIN_INFO = [
  { name: "M365 Core Services & Security", pct: "30–35%", count: 35, color: "#38bdf8" },
  { name: "Data Protection & Governance", pct: "35–40%", count: 40, color: "#a78bfa" },
  { name: "Copilot & Agent Administration", pct: "25–30%", count: 25, color: "#34d399" },
];

export default function Home({ onStart, onDisclaimer }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--navy)" }}>
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #38bdf8, #6366f1)", color: "#fff" }}>
            AB
          </div>
          <span className="font-semibold text-white text-sm">AB900Prep.com</span>
        </div>
        <KofiButton compact />
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="fade-up max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse inline-block"></span>
            Free Practice Exam · 238 Questions Available
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text)" }}>
            Pass the Microsoft<br />
            <span style={{ color: "#38bdf8" }}>AB-900 Exam</span>
          </h1>
          <p className="text-lg mb-2" style={{ color: "var(--muted)" }}>
            Microsoft 365 Copilot & Agent Administration Fundamentals
          </p>
          <p className="text-sm mb-10" style={{ color: "var(--navy-light)", color: "#475569" }}>
            Free practice questions with explanations and Microsoft Learn source links.
            No account required.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-10 max-w-sm mx-auto">
            {[
              { icon: "📋", val: "238", label: "Questions" },
              { icon: "⏱️", val: "240 min", label: "Time limit" },
              { icon: "🎯", val: "700/1000", label: "Pass score" },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-3 text-center"
                style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
                <div className="text-xl mb-0.5">{s.icon}</div>
                <div className="font-bold text-white text-base">{s.val}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Domain breakdown */}
          <div className="rounded-2xl p-5 mb-8 text-left max-w-md mx-auto"
            style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Exam Domains
            </p>
            <div className="space-y-3">
              {DOMAIN_INFO.map(d => (
                <div key={d.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm" style={{ color: "var(--text)" }}>{d.name}</span>
                    <span className="text-xs font-medium" style={{ color: d.color }}>{d.pct}</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "#1e293b" }}>
                    <div className="h-full rounded-full progress-bar"
                      style={{ width: `${(d.count / 100) * 100}%`, background: d.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onStart}
            className="w-full max-w-sm mx-auto block py-4 rounded-2xl font-bold text-lg text-white transition-opacity hover:opacity-90 active:scale-95 mb-4"
            style={{ background: "linear-gradient(135deg, #0284c7, #6366f1)" }}>
            Start Practice Exam →
          </button>

          {/* Ko-fi */}
          <div className="max-w-sm mx-auto mb-6">
            <KofiButton />
          </div>

          {/* Disclaimer link */}
          <p className="text-xs" style={{ color: "#475569" }}>
            Not affiliated with Microsoft Corporation.{" "}
            <button onClick={onDisclaimer} className="underline hover:text-sky-400 transition-colors">
              Read disclaimer
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-4 text-center text-xs" style={{ color: "#334155", borderTop: "1px solid #1e293b" }}>
        <p>© 2025 AB900Prep.com · Based on{" "}
          <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900"
            target="_blank" rel="noopener noreferrer"
            className="underline hover:text-sky-400 transition-colors">
            Microsoft Learn AB-900 Study Guide
          </a>
          {" "}· Not an official Microsoft product
        </p>
      </footer>
    </div>
  );
}

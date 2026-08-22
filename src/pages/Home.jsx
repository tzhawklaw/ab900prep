import { useState } from "react";
import KofiButton from "../components/KofiButton.jsx";
import PayPalButton from "../components/PayPalButton.jsx";
import { FREE_EXPLANATION_LIMIT } from "../paywall.js";

const DOMAIN_INFO = [
  { name: "M365 Core Services & Security", pct: "30–35%", count: 35, color: "#38bdf8" },
  { name: "Data Protection & Governance", pct: "35–40%", count: 40, color: "#a78bfa" },
  { name: "Copilot & Agent Administration", pct: "25–30%", count: 25, color: "#34d399" },
];

const FAQS = [
  {
    q: "What is the Microsoft AB-900 exam?",
    a: "The AB-900 is Microsoft's certification exam for Microsoft 365 Copilot and Agent Administration Fundamentals. It tests your knowledge of AI-powered tools in Microsoft 365, including Copilot features, agent configuration, and responsible AI principles. No deep technical background is required.",
  },
  {
    q: "How many questions are on the AB-900 exam?",
    a: "The AB-900 exam typically contains between 40 and 60 questions. Question formats include multiple choice, drag-and-drop, and scenario-based questions. The exam duration is approximately 45 minutes.",
  },
  {
    q: "What is the passing score for AB-900?",
    a: "You need a scaled score of 700 out of 1000 to pass the AB-900 exam. Microsoft uses a scaled scoring model, meaning the difficulty of each question influences the final score calculation.",
  },
  {
    q: "Is the AB-900 exam hard?",
    a: "The AB-900 is considered one of Microsoft's more accessible certification exams. It is designed for administrators and business users rather than developers. With regular practice using AB900Prep.com, most candidates pass on their first attempt.",
  },
  {
    q: "What topics does the AB-900 exam cover?",
    a: "The AB-900 exam covers three main domains: M365 Core Services & Security (30–35%), Data Protection & Governance (35–40%), and Copilot & Agent Administration (25–30%). AB900Prep.com has 260 practice questions spread across all three domains.",
  },
  {
    q: "What is the difference between AB-900 and AI-900?",
    a: "The AI-900 (Azure AI Fundamentals) covers foundational AI and machine learning concepts on Azure. The AB-900 (Microsoft 365 Copilot and Agent Administration Fundamentals) focuses specifically on Microsoft 365 Copilot features and administration. They are separate certifications with different target audiences.",
  },
  {
    q: "Is AB900Prep.com free to use?",
    a: `Practicing is free — no account required, no time limit, and you can answer all 260 questions and see your scaled score at no cost. The first ${FREE_EXPLANATION_LIMIT} questions include free explanations and source links; from question ${FREE_EXPLANATION_LIMIT + 1} onward, and in the results review, explanations require a one-time payment of €2.99, processed securely by Stripe. Donations alone haven't covered hosting costs, so this is how the site stays online — see What's New below for the full story.`,
  },
  {
    q: "How should I prepare for the AB-900 exam?",
    a: "The most effective preparation combines Microsoft Learn's free AB-900 learning path with regular practice questions. AB900Prep.com offers 260 free practice questions that reflect the real exam format, with detailed explanations and direct links to Microsoft Learn source material available via a one-time unlock.",
  },
];

const CHANGELOG = [
  {
    date: "22 August 2026",
    version: "v1.5",
    badge: "Pricing",
    badgeColor: "#ef4444",
    items: [
      "An honest update: months of Ko-fi and PayPal donation prompts haven't come close to covering hosting costs",
      "Practicing all 260 questions and seeing your scaled score stays free — no account, no time limit",
      "Your first 20 in-exam explanations are free; after that (and in the results review), explanations require a one-time payment of €2.99, processed securely by Stripe",
      "If this doesn't cover the hosting bill, I may have to take AB900Prep.com offline — thank you to everyone who has already supported it",
    ],
  },
  {
    date: "31 July 2026",
    version: "v1.4",
    badge: "Funding",
    badgeColor: "#f59e0b",
    items: [
      "Added PayPal as an alternative donation method alongside Ko-fi on the home, exam, and results pages",
      "Added a funding goal progress bar showing hosting-cost fundraising progress",
      "Added cost context so visitors know what donations actually cover",
      "Fixed Ko-fi donation click tracking on the results page (was untracked)",
    ],
  },
  {
    date: "2 June 2026",
    version: "v1.3",
    badge: "Questions",
    badgeColor: "#38bdf8",
    items: [
      "Expanded from 238 to 260 questions",
      "Added 20 new Data Protection & Governance questions to match exam weight (35–40%)",
      "Added questions on: Audit Standard vs Premium, eDiscovery tiers, auto-labeling, DLP simulation mode, Information Barriers, records management, endpoint DLP, adaptive protection, DSPM for AI, Copilot interaction data in Purview, and more",
      "Added 2 new Copilot questions on SharePoint pay-as-you-go and admin feature toggles",
      "Verified all topics against the official Microsoft AB-900 study guide (updated April 2026)",
    ],
  },
  {
    date: "6 April 2026",
    version: "v1.2",
    badge: "UX",
    badgeColor: "#a78bfa",
    items: [
      "Added in-exam donation nudge after every 30 questions",
      "Improved donate button copy and styling",
      "Added Ko-fi support link throughout the exam flow",
    ],
  },
  {
    date: "5 April 2026",
    version: "v1.1",
    badge: "Features",
    badgeColor: "#34d399",
    items: [
      "Added Ko-fi donate button on home and results pages",
      "Added GA4 analytics (privacy-respecting, no personal data)",
      "Fixed currency display from USD to EUR",
    ],
  },
  {
    date: "18 March 2026",
    version: "v1.0",
    badge: "Launch",
    badgeColor: "#f59e0b",
    items: [
      "Added FAQ section with structured data for SEO",
      "Added sitemap.xml and robots.txt",
      "Added pause/resume exam feature with countdown",
      "Redesigned home page with domain breakdown and stats",
    ],
  },
  {
    date: "15 March 2026",
    version: "v0.1",
    badge: "Launch",
    badgeColor: "#f59e0b",
    items: [
      "Initial launch: 238 practice questions across 3 exam domains",
      "240-minute timed exam with question navigator and flag system",
      "Results page with scaled score (200–1000), domain breakdown, and per-question review",
      "Every question links to the official Microsoft Learn source",
    ],
  },
];

function Changelog() {
  return (
    <section className="px-4 py-12 max-w-2xl mx-auto w-full">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
          Built in the open
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text)" }}>
          What's New
        </h2>
        <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
          AB900Prep.com is maintained by one person. Here's everything that's been added or improved.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: "#1e293b" }} />
        <div className="space-y-8">
          {CHANGELOG.map((entry, i) => (
            <div key={i} className="flex gap-5">
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-700"
                  style={{ background: i === 0 ? entry.badgeColor : "var(--navy)" }} />
              </div>
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${entry.badgeColor}20`, color: entry.badgeColor, border: `1px solid ${entry.badgeColor}40` }}>
                    {entry.badge}
                  </span>
                  <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{entry.version}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{entry.date}</span>
                </div>
                <ul className="space-y-1">
                  {entry.items.map((item, j) => (
                    <li key={j} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "#334155" }}>–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="px-4 py-12 max-w-2xl mx-auto w-full">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
          Everything you need to know
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text)" }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-2">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--navy-mid)",
                border: isOpen ? "1px solid rgba(56,189,248,0.4)" : "1px solid #1e293b",
                transition: "border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              >
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: isOpen ? "#38bdf8" : "var(--text)", transition: "color 0.2s ease" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background: isOpen ? "rgba(56,189,248,0.15)" : "#1e293b",
                    color: isOpen ? "#38bdf8" : "var(--muted)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease, background 0.2s ease, color 0.2s ease",
                  }}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5">
                  <div className="h-px mb-4" style={{ background: "rgba(56,189,248,0.15)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

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
        <div className="fade-up max-w-2xl mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse inline-block"></span>
            Free Practice Exam · 260 Questions Available
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--text)" }}>
            Pass the Microsoft<br />
            <span style={{ color: "#38bdf8" }}>AB-900 Exam</span>
          </h1>
          <p className="text-lg mb-2" style={{ color: "var(--muted)" }}>
            Microsoft 365 Copilot & Agent Administration Fundamentals
          </p>
          <p className="text-sm mb-10" style={{ color: "#475569" }}>
            Free practice questions with scaled scoring. No account required.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-10 max-w-sm mx-auto">
            {[
              { icon: "📋", val: "260", label: "Questions" },
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

          {/* Funding goal + donate */}
          <div className="max-w-md mx-auto mb-6 rounded-2xl p-5"
            style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <p className="text-sm font-semibold text-center mb-1" style={{ color: "var(--text)" }}>
              This site costs €20/month to host — at least €240/year needed.
            </p>
            <p className="text-xs text-center mb-4" style={{ color: "var(--muted)" }}>
              Donations are optional and help cover that — on top of the one-time unlock fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <div className="w-full sm:w-auto">
                <KofiButton compact />
              </div>
              <span className="text-xs hidden sm:inline" style={{ color: "#475569" }}>or</span>
              <div className="w-full sm:w-auto flex justify-center">
                <PayPalButton id="paypal-donate-button-home" />
              </div>
            </div>
          </div>

          {/* Disclaimer link */}
          <p className="text-xs" style={{ color: "#475569" }}>
            Not affiliated with Microsoft Corporation.{" "}
            <button onClick={onDisclaimer} className="underline hover:text-sky-400 transition-colors">
              Read disclaimer
            </button>
          </p>
        </div>

        {/* FAQ + Changelog */}
        <div className="w-full max-w-2xl mx-auto mt-8">
          <div className="h-px mb-12" style={{ background: "#1e293b" }} />
          <FAQ />
          <div className="h-px my-4" style={{ background: "#1e293b" }} />
          <Changelog />
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

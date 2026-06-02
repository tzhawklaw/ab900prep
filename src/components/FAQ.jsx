import { useState } from "react";

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
    a: "Yes, AB900Prep.com is completely free. No account is required, there is no paywall, and there is no time limit. The site currently offers 260 practice questions with explanations and Microsoft Learn source links, with a goal of reaching 500 questions.",
  },
  {
    q: "How should I prepare for the AB-900 exam?",
    a: "The most effective preparation combines Microsoft Learn's free AB-900 learning path with regular practice questions. AB900Prep.com offers 260 free practice questions that reflect the real exam format, with explanations and direct links to Microsoft Learn source material.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="px-4 py-12 max-w-2xl mx-auto w-full">
      {/* Heading */}
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

      {/* FAQ items */}
      <div className="space-y-2">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all"
              style={{
                background: "var(--navy-mid)",
                border: isOpen ? "1px solid rgba(56,189,248,0.4)" : "1px solid #1e293b",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              >
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: isOpen ? "#38bdf8" : "var(--text)" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform"
                  style={{
                    background: isOpen ? "rgba(56,189,248,0.15)" : "#1e293b",
                    color: isOpen ? "#38bdf8" : "var(--muted)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5">
                  <div
                    className="h-px mb-4"
                    style={{ background: "rgba(56,189,248,0.15)" }}
                  />
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

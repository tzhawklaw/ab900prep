import { FREE_EXPLANATION_LIMIT } from "../paywall.js";

export default function Disclaimer({ onBack }) {
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "var(--navy)" }}>
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack}
          className="text-sm mb-6 flex items-center gap-1 hover:text-sky-400 transition-colors"
          style={{ color: "var(--muted)" }}>
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-white mb-6">Disclaimer</h1>

        <div className="space-y-6">
          {[
            {
              title: "Not affiliated with Microsoft",
              content: "AB900Prep.com is an independent study resource and is NOT affiliated with, endorsed by, or approved by Microsoft Corporation. Microsoft, AB-900, Microsoft 365, Microsoft Copilot, and related product names are trademarks of Microsoft Corporation."
            },
            {
              title: "Original practice questions",
              content: "All questions on this website are original practice questions written by the AB900Prep.com team, based on publicly available information from the official Microsoft Learn study guide and Microsoft documentation. These are NOT real exam questions, brain dumps, or leaked content from any Microsoft examination."
            },
            {
              title: "No guarantee of accuracy",
              content: "While we strive to ensure all content is accurate and up-to-date, AB900Prep.com makes no warranties or representations about the accuracy, completeness, or suitability of the information provided. Microsoft may update exam content at any time. Always refer to the official Microsoft Learn study guide as your primary source."
            },
            {
              title: "No exam pass guarantee",
              content: "Passing this practice exam does not guarantee that you will pass the official Microsoft AB-900 certification exam. This resource is intended as a supplementary study tool only."
            },
            {
              title: "Intellectual property",
              content: "We respect intellectual property rights. Our questions are original works based on publicly available Microsoft documentation. We do not reproduce, copy, or distribute any proprietary Microsoft examination content. If you believe any content infringes on your intellectual property rights, please contact us immediately."
            },
            {
              title: "Privacy",
              content: "AB900Prep.com does not collect personal data. All exam progress and scores are stored locally in your browser and are never transmitted to our servers. We do not use tracking cookies beyond what is strictly necessary for the website to function. The one exception is if you unlock explanations (see Payments below) — that transaction is processed directly by Stripe, which collects the payment details required to complete it. We never see or store your card information."
            },
            {
              title: "Donations",
              content: "Donations made via Ko-fi or PayPal are voluntary contributions to support the continued development and maintenance of this resource. Donations do not guarantee any additional services, features, or exam success."
            },
            {
              title: "Payments",
              content: `Practicing all 260 questions and seeing your scaled score is free. Your first ${FREE_EXPLANATION_LIMIT} explanations are free as you answer questions; after that, and in the results review, detailed explanations and Microsoft Learn source links require a one-time payment of €2.99, processed securely by Stripe — AB900Prep.com never sees or stores your card details. This is a one-time fee, not a subscription, and unlocks explanations for as long as you use the same browser on the same device (access is not tied to an account, since none exists). If your payment didn't go through correctly or you're not satisfied, contact us and we'll sort out a refund.`
            }
          ].map(item => (
            <div key={item.title} className="rounded-xl p-5"
              style={{ background: "var(--navy-mid)", border: "1px solid #1e293b" }}>
              <h2 className="font-semibold text-white mb-2">{item.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl p-4 text-center"
          style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}>
          <p className="text-xs" style={{ color: "#38bdf8" }}>
            Source reference:{" "}
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900"
              target="_blank" rel="noopener noreferrer"
              className="underline hover:opacity-80">
              Microsoft Learn – AB-900 Official Study Guide
            </a>
          </p>
        </div>

        <button onClick={onBack}
          className="w-full mt-6 py-3 rounded-xl font-semibold text-sm text-white hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #0284c7, #6366f1)" }}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

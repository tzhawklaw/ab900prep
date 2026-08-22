import { trackDonateClick } from '../analytics';
import PayPalButton from './PayPalButton.jsx';

export default function DonateNudge({ answered, onDismiss }) {
  return (
    <div className="rounded-xl p-4 mb-5 fade-up"
      style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-sm font-semibold mb-1" style={{ color: "#fbbf24" }}>
            {"☕"} You've answered {answered} questions — practicing stays free
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
            AB900Prep is built by one person with no ads.
            If it's helping you prep, a €3 coffee makes a real difference.
          </p>
          <a href="https://ko-fi.com/tzhawklaw" target="_blank" rel="noopener noreferrer"
            onClick={trackDonateClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg px-4 py-2 mt-3 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#1c1917" }}>
            {"☕"} Buy a Coffee (€3)
          </a>
          <div className="flex items-center gap-2 my-2 max-w-[200px]">
            <div className="flex-1 h-px" style={{ background: "#334155" }}></div>
            <span className="text-xs" style={{ color: "#475569" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "#334155" }}></div>
          </div>
          <PayPalButton id="paypal-donate-button-nudge" />
        </div>
        <button onClick={onDismiss} className="text-xs px-2 py-1 rounded flex-shrink-0"
          style={{ color: "#475569" }}>✕</button>
      </div>
    </div>
  );
}

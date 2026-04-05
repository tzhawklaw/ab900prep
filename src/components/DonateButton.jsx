// src/components/DonateButton.jsx
import { trackDonateClick } from '../analytics';

const KOFI_URL = 'https://ko-fi.com/tzhawklaw';

export default function DonateButton({ variant = 'default' }) {
  function handleClick() {
    trackDonateClick();
    window.open(KOFI_URL, '_blank', 'noopener,noreferrer');
  }

  if (variant === 'banner') {
    return (
      <div className="w-full bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-blue-900 text-sm">AB-900Prep is 100% free</p>
          <p className="text-blue-700 text-xs mt-0.5">If this helped you pass, consider buying me a coffee</p>
        </div>
        <button onClick={handleClick} className="shrink-0 bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          ☕ Support AB900Prep
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleClick} className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
      ☕ Support AB900Prep
    </button>
  );
}
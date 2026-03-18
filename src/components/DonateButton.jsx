// src/components/DonateButton.jsx
// Ko-fi donate button — tracks clicks to GA4 as a conversion event

import { trackDonateClick } from '../analytics';

const KOFI_URL = 'https://ko-fi.com/tzhawklaw';

export default function DonateButton({ variant = 'default' }) {
  function handleClick() {
    trackDonateClick();
    window.open(KOFI_URL, '_blank', 'noopener,noreferrer');
  }

  // Two variants: 'default' (inline) and 'banner' (full-width strip)
  if (variant === 'banner') {
    return (
      <div className="w-full bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-blue-900 text-sm">
            AB-900Prep is 100% free
          </p>
          <p className="text-blue-700 text-xs mt-0.5">
            If this helped you pass, consider buying me a coffee ☕
          </p>
        </div>
        <button
          onClick={handleClick}
          className="shrink-0 bg-[#FF5E5B] hover:bg-[#e54e4b] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Support on Ko-fi
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-[#FF5E5B] hover:bg-[#e54e4b] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
    >
      ☕ Support on Ko-fi
    </button>
  );
}

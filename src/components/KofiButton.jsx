import { trackDonateClick } from '../analytics';

export default function KofiButton({ compact = false }) {
    if (compact) {
          return (
                  <a href="https://ko-fi.com/tzhawklaw" target="_blank" rel="noopener noreferrer"
                            onClick={trackDonateClick}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-80"
                            style={{
                                        background: "rgba(245,158,11,0.15)",
                                        color: "#d97706",
                                        border: "1px solid rgba(245,158,11,0.3)"
                            }}>
                            ☕ Support AB900Prep
                  </a>
                );
    }

  return (
        <a href="https://ko-fi.com/tzhawklaw" target="_blank" rel="noopener noreferrer"
                onClick={trackDonateClick}
                className="kofi-pulse inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                          background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                          color: "#1c1917",
                }}>
                ☕ Support AB900Prep
        </a>
      );
}

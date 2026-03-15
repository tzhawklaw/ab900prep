export default function KofiButton({ compact = false }) {
  if (compact) {
    return (
      <a href="https://ko-fi.com/tzhawklaw" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-80"
        style={{
          background: "rgba(255,94,0,0.15)",
          color: "#ff6e2d",
          border: "1px solid rgba(255,94,0,0.3)"
        }}>
        ☕ Donate
      </a>
    );
  }

  return (
    <a href="https://ko-fi.com/tzhawklaw" target="_blank" rel="noopener noreferrer"
      className="kofi-pulse inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
      style={{
        background: "linear-gradient(135deg, #ff6348, #ff9500)",
        color: "#fff",
      }}>
      ☕ Support on Ko-fi
    </a>
  );
}

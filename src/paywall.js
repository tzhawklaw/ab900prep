// src/paywall.js
const UNLOCK_KEY = "ab900_explanations_unlocked";
const PENDING_KEY = "ab900_pending_state";

// Free explanations before the in-exam paywall kicks in.
export const FREE_EXPLANATION_LIMIT = 20;

export function isUnlocked() {
  return localStorage.getItem(UNLOCK_KEY) === "1";
}

export function setUnlocked() {
  localStorage.setItem(UNLOCK_KEY, "1");
}

// state.context is "results" ({ answers, timeUsed, reviewIdx }) or
// "exam" ({ answers, flagged, current, timeLeft }) — App.jsx branches on it
// to resume in the right place after the Stripe redirect round trip.
export function savePendingState(state) {
  localStorage.setItem(PENDING_KEY, JSON.stringify(state));
}

export function loadPendingState() {
  const raw = localStorage.getItem(PENDING_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearPendingState() {
  localStorage.removeItem(PENDING_KEY);
}

export async function startCheckout() {
  const res = await fetch("/.netlify/functions/create-checkout-session", { method: "POST" });
  if (!res.ok) throw new Error("Could not start checkout");
  const { url } = await res.json();
  window.location.href = url;
}

export async function verifyPaymentSession(sessionId) {
  const res = await fetch(`/.netlify/functions/verify-payment?session_id=${encodeURIComponent(sessionId)}`);
  if (!res.ok) return false;
  const { paid } = await res.json();
  return !!paid;
}

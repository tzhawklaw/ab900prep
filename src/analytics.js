// src/analytics.js
// GA4 integration for AB900Prep.com

const GA_ID = import.meta.env.VITE_GA_ID;

/**
 * Inject the GA4 script tag into <head>
 * Call this once in main.jsx before rendering the app
 */
export function initGA() {
  if (!GA_ID) {
    console.warn('[Analytics] VITE_GA_ID is not set.');
    return;
  }

  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

/**
 * Generic event tracker
 * @param {string} eventName
 * @param {Object} params
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

// ─── Specific event helpers ────────────────────────────────────────────────────

/** User starts the quiz / practice exam */
export function trackQuizStarted() {
  trackEvent('quiz_started');
}

/**
 * User answers a question
 * @param {number} questionIndex  0-based index
 * @param {boolean} correct
 */
export function trackQuestionAnswered(questionIndex, correct) {
  trackEvent('question_answered', {
    question_number: questionIndex + 1,
    correct: correct,
  });
}

/**
 * User finishes the quiz
 * @param {number} score  percentage 0–100
 * @param {number} totalQuestions
 * @param {number} timeTakenSeconds
 */
export function trackQuizCompleted(score, totalQuestions, timeTakenSeconds) {
  trackEvent('quiz_completed', {
    score_pct: Math.round(score),
    total_questions: totalQuestions,
    time_seconds: timeTakenSeconds,
  });
}

/**
 * User clicks the Ko-fi donate button
 * Track as a GA4 conversion — mark this event as a conversion in GA4 dashboard
 */
export function trackDonateClick() {
  trackEvent('donate_click', {
    currency: 'EUR',
    value: 3.0,
  });
}

/** User shares the site (social share button) */
export function trackShare(method = 'unknown') {
  trackEvent('share', { method });
}

/** User searches / filters questions */
export function trackSearch(query) {
  trackEvent('search', { search_term: query });
}

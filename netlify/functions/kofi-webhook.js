// netlify/functions/kofi-webhook.js
export async function handler(event) {

  // Alleen POST accepteren
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Ko-fi stuurt data als form-encoded string
    const params = new URLSearchParams(event.body);
    const raw = params.get("data");
    if (!raw) return { statusCode: 200, body: "ok" };

    const data = JSON.parse(raw);

    // Test berichten negeren
    if (data.is_public === undefined) {
      return { statusCode: 200, body: "ok" };
    }

    const GA_ID = process.env.VITE_GA_ID;
    const GA_SECRET = process.env.GA4_API_SECRET;

    if (!GA_ID || !GA_SECRET) {
      console.error("Missing GA4 env vars");
      return { statusCode: 200, body: "ok" };
    }

    // Stuur donation_completed event naar GA4
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_ID}&api_secret=${GA_SECRET}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: data.kofi_transaction_id || "kofi-webhook",
          events: [{
            name: "donation_completed",
            params: {
              currency: data.currency || "EUR",
              value: parseFloat(data.amount) || 3.0,
              transaction_id: data.kofi_transaction_id,
              kofi_type: data.type,
            },
          }],
        }),
      }
    );

    return { statusCode: 200, body: "ok" };

  } catch (err) {
    console.error("Ko-fi webhook error:", err);
    return { statusCode: 200, body: "ok" }; // Altijd 200 terug
  }
}
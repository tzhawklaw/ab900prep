// netlify/functions/verify-payment.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const sessionId = event.queryStringParameters?.session_id;

    if (!sessionId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ paid: false, error: "Missing session_id" }),
      };
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return {
      statusCode: 200,
      body: JSON.stringify({ paid: session.payment_status === "paid" }),
    };
  } catch (err) {
    console.error("verify-payment error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ paid: false, error: "Could not verify payment" }),
    };
  }
}

// netlify/functions/create-checkout-session.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const origin = event.headers.origin || `https://${event.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 299,
            product_data: {
              name: "AB900Prep — Unlock explanations",
              description: "One-time unlock for detailed explanations and Microsoft Learn source links on all 260 questions.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("create-checkout-session error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not create checkout session" }),
    };
  }
}

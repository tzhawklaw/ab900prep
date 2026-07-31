import { useEffect, useRef } from "react";
import { trackDonateClick } from "../analytics";

const SDK_URL = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
const HOSTED_BUTTON_ID = "EQGACZ7HMSE24";

let sdkPromise = null;
function loadPayPalSdk() {
  if (window.PayPal) return Promise.resolve();
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SDK_URL;
      script.charset = "UTF-8";
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
  return sdkPromise;
}

export default function PayPalButton({ id = "paypal-donate-button" }) {
  const containerRef = useRef(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    loadPayPalSdk().then(() => {
      if (cancelled || !containerRef.current || renderedRef.current) return;
      renderedRef.current = true;
      window.PayPal.Donation.Button({
        env: "production",
        hosted_button_id: HOSTED_BUTTON_ID,
        image: {
          src: "https://www.paypalobjects.com/en_US/NL/i/btn/btn_donateCC_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render(`#${id}`);
    });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className="flex justify-center" onClickCapture={trackDonateClick}>
      <div id={id} ref={containerRef} />
    </div>
  );
}

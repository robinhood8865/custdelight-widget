import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  PaymentElement,
  CardElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = (props) => {
  const { setShowPage, total, setShowWidget } = props;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { buttonColor } = useSelector((state) => state.theme);
  const currentUrl = window.location.href;

  const stripe = useStripe();
  console.log("🚀 ~ file: checkoutForm.jsx:15 ~ CheckoutForm ~ stripe", stripe);
  const elements = useElements();
  console.log(
    "🚀 ~ file: checkoutForm.jsx:17 ~ CheckoutForm ~ elements",
    elements
  );

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: currentUrl,
      },
    });
    setShowWidget(true);
    if (error) setShowPage(8);
    else setShowPage(4);
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <CardElement /> */}
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {/* <div className="w-[327px] h-[32px] mt-[32px] ml-[36px] flex justify-between">
        <div
          onClick={() => {
            setShowPage(4);
          }}
          className="cursor-pointer text-[18px] font-[500] flex justify-center w-full h-[48px] py-[12px] 
          text-white rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] "
          // type="submit"
          style={{ background: buttonColor }}
        >
          Pay ${m_total}
        </div>
      </div> */}
      <button
        className="w-full h-[48px] mt-[32px] text-[18px] font-[500] 
         text-white rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] py-[12px]"
        style={{ background: buttonColor }}
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay $" + total
          )}
        </span>
      </button>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;

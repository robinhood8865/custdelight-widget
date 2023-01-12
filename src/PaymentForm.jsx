import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // use stripe.createToken to get a unique token for the card
    const { error, token } = await stripe.createToken(cardElement);

    if (!error) {
      // Backend is not implemented yet, but once there isn’t any errors,
      // you can pass the token and payment data to the backend to complete
      // the charge
      axios
        .post(process.env.REACT_APP_BACKEND_API + "/stripe/charge", {
          token: token.id,
          currency: "EGP",
          price: 1000, // or 10 pounds (10*100). Stripe charges with the smallest price unit allowed
        })
        .then((resp) => {
          alert("Your payment was successful");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>PAY</button>
    </form>
  );
};

export default PaymentForm;

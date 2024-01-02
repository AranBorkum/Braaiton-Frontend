import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import SubmitButton from "../atoms/SubmitButton";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <SubmitButton disabled={!stripe} text={"Complete and pay"} />
    </form>
  );
};

export default CheckoutForm;

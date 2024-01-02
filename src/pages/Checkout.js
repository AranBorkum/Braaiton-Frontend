import {Elements, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import {useParams} from "react-router-dom";
import {HTTPClient} from "../services/http";
import {useEffect, useState} from "react";

const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {return;}

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });

        if (result.error) {
            console.log(result.error.message)
        } else {}
    };

    return(
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Complete and Pay</button>
        </form>
    )
}


function Checkout() {


    const options = {
        clientSecret: '{{CLIENT_SECRET}}',
    };



    // return (
    //     <Elements stripe={stripePromise} options={options}>
    //         <CheckoutForm />
    //     </Elements>
    // )




    return (
            <>
                <h1>Checkout</h1>
            </>

    )
}

export default Checkout;
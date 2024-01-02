import styled from "@emotion/styled";
import TopNavigationBar from "../components/TopNavigationBar";

import "react-phone-number-input/style.css";
import { loadStripe } from "@stripe/stripe-js";
import { createContext, useEffect, useState } from "react";
import PaymentAccordion from "../components/molecules/PaymentAccordion";
import { useParams } from "react-router-dom";
import { HTTPClient } from "../services/http";

const StyledPayment = styled.div`
  .phone-input {
    width: 400px;
  }

  .elements-container {
    width: 450px;
  }
`;

const stripePromise = loadStripe(
  "pk_test_51OLj5cBeIfC8vB4K0zyz9s7nv8x9JcWFzDeMO6YYVFjyxCOONdyQrx9Kd1zdsNQT6q3bmJeonIiMsFq14CTcUblS005r6cJP2w",
);

export const PaymentContext = createContext();

function Payment() {
  const { payment_id } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactInfoExpanded, setContactInfoExpanded] = useState(true);
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const [paymentExpanded, setPaymentExpanded] = useState(false);

  useEffect(() => {
    HTTPClient.get("/payment/" + payment_id + "/get-payment/")
      .then((res) => {
        setClientSecret(res.data.client_secret);
        console.log(res);
        try {
          const customer = res.data.customer;
          if (customer.first_name) {
            setContactInfoExpanded(false);
            setPaymentDisabled(false);
            setPaymentExpanded(true);
          }
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const options = {
    clientSecret: clientSecret,
  };

  const contextValues = {
    phoneNumber: [phoneNumber, setPhoneNumber],
    contactInfoExpanded: [contactInfoExpanded, setContactInfoExpanded],
    paymentDisabled: [paymentDisabled, setPaymentDisabled],
    paymentExpanded: [paymentExpanded, setPaymentExpanded],
    stripePromise: stripePromise,
    stripeOptions: options,
  };

  return (
    <PaymentContext.Provider value={contextValues}>
      <StyledPayment>
        <TopNavigationBar />
        {clientSecret && <PaymentAccordion />}
      </StyledPayment>
    </PaymentContext.Provider>
  );
}

export default Payment;

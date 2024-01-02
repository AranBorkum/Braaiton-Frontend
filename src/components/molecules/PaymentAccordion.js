import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import UserInfoForm from "../forms/UserInfoForm";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../forms/CheckoutForm";
import { useContext } from "react";
import { PaymentContext } from "../../pages/Payment";

const StyledPaymentAccordion = styled.div`
  .elements-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

function PaymentAccordion() {
  const {
    phoneNumber,
    contactInfoExpanded,
    paymentDisabled,
    paymentExpanded,
    stripePromise,
    stripeOptions,
  } = useContext(PaymentContext);

  const [contactInfoExpandedValue, setContactInfoExpandedValue] =
    contactInfoExpanded;
  const [paymentDisabledValue, setPaymentDisabledValue] = paymentDisabled;
  const [paymentExpandedValue, setPaymentExpandedValue] = paymentExpanded;

  return (
    <StyledPaymentAccordion>
      <Accordion expanded={contactInfoExpandedValue}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contact Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UserInfoForm />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={paymentDisabledValue}
        expanded={paymentExpandedValue}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={"elements-container"}>
            <Elements stripe={stripePromise} options={stripeOptions}>
              <CheckoutForm />
            </Elements>
          </div>
        </AccordionDetails>
      </Accordion>
    </StyledPaymentAccordion>
  );
}

export default PaymentAccordion;

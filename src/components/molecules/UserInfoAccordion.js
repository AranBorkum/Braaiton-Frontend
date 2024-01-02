import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import UserInfoForm from "../forms/UserInfoForm";
import { useState } from "react";

function UserInfoAccordion({ contactInfoExpanded }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Accordion expanded={contactInfoExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Contact Info</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <UserInfoForm
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setContactInfoExpanded={setContactInfoExpanded}
          setPaymentExpanded={setPaymentExpanded}
          setPaymentDisabled={setPaymentDisabled}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default UserInfoAccordion;

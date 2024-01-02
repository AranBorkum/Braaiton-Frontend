import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { PhoneNumberInput, TextInput } from "../TextInput";
import { HTTPClient } from "../../services/http";
import SubmitButton from "../atoms/SubmitButton";
import { useContext } from "react";
import { PaymentContext } from "../../pages/Payment";
import { useParams } from "react-router-dom";

const StyledUserInfoForm = styled.div`
  display: flex;
  justify-content: center;
`;

function UserInfoForm() {
  const { payment_id } = useParams();

  const { phoneNumber, contactInfoExpanded, paymentDisabled, paymentExpanded } =
    useContext(PaymentContext);
  const [phoneNumberValue, setPhoneNumberValue] = phoneNumber;
  const [, setContactInfoExpandedValue] = contactInfoExpanded;
  const [, setPaymentDisabledValue] = paymentDisabled;
  const [, setPaymentExpandedValue] = paymentExpanded;

  function handle(values, phoneNumber) {
    HTTPClient.post("/payment/" + payment_id + "/create-customer/", {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: phoneNumber,
    })
      .then((res) => {
        setContactInfoExpandedValue(false);
        setPaymentDisabledValue(false);
        setPaymentExpandedValue(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledUserInfoForm>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
        }}
        onSubmit={(values) => {
          handle(values, phoneNumberValue);
        }}
      >
        <Form>
          <TextInput
            type={"text"}
            name={"first_name"}
            placeholder={"First name..."}
          />
          <TextInput
            type={"text"}
            name={"last_name"}
            placeholder={"Last name..."}
          />
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"Email address..."}
          />
          <PhoneNumberInput
            phoneNumber={phoneNumberValue}
            setPhoneNumber={setPhoneNumberValue}
          />
          <SubmitButton text={"Submit and continue"} />
        </Form>
      </Formik>
    </StyledUserInfoForm>
  );
}

export default UserInfoForm;

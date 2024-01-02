import styled from "@emotion/styled";

import { Field } from "formik";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

const StyledTextInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 70px;
  border-radius: 10px;

  input {
    width: 300px;
    height: 90%;
    border-radius: 5px;
    border: 1px darkgrey solid;
    font-size: 18pt;
  }
`;

const StyledPhoneNumberInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 70px;
  border-radius: 10px;
`;

export function TextInput({ placeholder, type, name }) {
  return (
    <StyledTextInput>
      <Field placeholder={placeholder} type={type} name={name} label={name} />
    </StyledTextInput>
  );
}

export function PhoneNumberInput({ phoneNumber, setPhoneNumber }) {
  return (
    <StyledPhoneNumberInput>
      <div>
        <PhoneInput
          onChange={(phone) => setPhoneNumber(phone)}
          value={phoneNumber}
          country={"gb"}
          name={"phone_number"}
        />
      </div>
    </StyledPhoneNumberInput>
  );
}

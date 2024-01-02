import styled from "@emotion/styled";
import PhoneInput from "react-phone-number-input";

const StyledPhoneNumberInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 70px;
  border-radius: 10px;

  input {
    width: 90%;
    height: 63px;
    border-radius: 10px;
    font-size: 18pt;
  }
`


export function PhoneNumberInput({placeholder, onChange, value}) {
    return (
        <StyledPhoneNumberInput>
            <PhoneInput
                international
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                defaultCountry={"GB"}
                className={"phone-input"}
            />
        </StyledPhoneNumberInput>
    )
}
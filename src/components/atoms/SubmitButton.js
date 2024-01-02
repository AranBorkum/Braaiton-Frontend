import styled from "@emotion/styled";

const StyledSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  width: 440px;

  .button {
    width: 300px;
    height: 80px;
    border-radius: 40px;
    border: 0;
    flex: 1 1 auto;
    margin: 10px;
    padding: 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    background-image: linear-gradient(
      to right,
      #fa8484 0%,
      #f48fe3 51%,
      #fa8484 100%
    );
    :active {
      background-position: right center; /* change the direction of the change here */
    }
    :hover {
      background-position: right center; /* change the direction of the change here */
    }
  }
`;

function SubmitButton({ text, disabled = false }) {
  return (
    <StyledSubmitButton>
      <div>
        <button className={"button"} type={"submit"} disabled={disabled}>
          {text}
        </button>
      </div>
    </StyledSubmitButton>
  );
}

export default SubmitButton;

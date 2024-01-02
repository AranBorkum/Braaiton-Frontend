import styled from "@emotion/styled";

const StyledSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;

  .button {
    width: 600px;
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
      #84fab0 0%,
      #8fd3f4 51%,
      #84fab0 100%
    );
    :active {
      background-position: right center; /* change the direction of the change here */
    }
    :hover {
      background-position: right center; /* change the direction of the change here */
      color: black;
    }
  }
`;
function ReserveButton({ text, onClick }) {
  return (
    <StyledSubmitButton>
      <div>
        <button className={"button"} onClick={onClick}>
          {text}
        </button>
      </div>
    </StyledSubmitButton>
  );
}

export default ReserveButton;

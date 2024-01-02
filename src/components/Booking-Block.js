import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import {BookingStage} from "../enums/BookingStage";

const StyledBookingBlock = styled.div`
  display: flex;
  height: 100px;
  width: 80vw;
  border: solid black 1px;
  border-radius: 20px;
  margin: 15px;
  align-items: center;
  transition: all .5s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
  .box {
    display: inline-block;
    border: 1px black solid;
    height: calc(100% - 20px);
    width: 180px;
    margin-left: 10px;
  }
  
  .end-box {
    display: inline-block;
    border: 1px black solid;
    height: calc(100% - 20px);
    margin-left: 10px;
  }
  
  :hover {
    background-color: #ee9696;
  }
`

export class BookingBlockInterface {
    constructor(id, stage) {
        this.id = id;
        this.stage = stage;
    }
}


export const BookingBlock = ({bookingBlockInterface}) => {
    const navigate = useNavigate();

    function navigateToBookingPage() {
        navigate("/bookings/" + bookingBlockInterface.id);
    }

    return (
        <StyledBookingBlock onClick={navigateToBookingPage}>
            <div className={"box"}>img</div>
            <div className={"box"}>{BookingStage(bookingBlockInterface.stage)}</div>
            <div className={"end-box"}>Customer Name</div>
        </StyledBookingBlock>
    )
}
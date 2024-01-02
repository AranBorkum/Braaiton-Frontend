import styled from "@emotion/styled";
import TopNavigationBar from "../../components/TopNavigationBar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HTTPClient } from "../../services/http";
import { BookingStage } from "../../enums/BookingStage";

const StyledBookingDetail = styled.div`
  .title {
    border: 1px solid black;
    display: inline-block;
  }

  .inline {
    display: inline-block;
  }

  .reserve-button {
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

    :hover {
      border: 3px black solid;
    }

    :active {
      background-position: right center; /* change the direction of the change here */
    }
  }

  .qr-code-img {
    height: 400px;
    width: 400px;
  }
`;

function BookingDetail() {
  const { booking_id } = useParams();
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [qrCode, setQrCode] = useState("");

  function getQrCode(payment_id) {
    HTTPClient.get("/qr/" + payment_id + "/generate-code/")
      .then((res) => setQrCode(res.data.image))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    HTTPClient.get("/booking/" + booking_id + "/retrieve/")
      .then((res) => {
        setResponse(res.data);
        getQrCode(res.data.payment_id);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCancelReservation() {
    HTTPClient.post("/booking/" + booking_id + "/cancel-reservation/")
      .then(() => navigate("/bookings/"))
      .catch((err) => console.log(err));
  }

  function handleGoToPayment() {
    navigate("/payment/" + response.payment_id + "/");
  }

  return (
    <StyledBookingDetail>
      <TopNavigationBar />
      <h1>{response.id}</h1>
      <h1>{response.item_id}</h1>
      <h1>{BookingStage(response.stage)}</h1>

      <div>
        <img
          className={"qr-code-img"}
          src={qrCode}
          alt={"oops"}
          onClick={handleGoToPayment}
        />
      </div>
      <div>
        <button className={"reserve-button"} onClick={handleCancelReservation}>
          Cancel Reservation
        </button>
      </div>
    </StyledBookingDetail>
  );
}

export default BookingDetail;

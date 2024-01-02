import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HTTPClient } from "../../services/http";
import styled from "@emotion/styled";
import { InventoryState } from "../../enums/InventoryState";
import TopNavigationBar from "../../components/TopNavigationBar";
import ReserveButton from "../../components/atoms/ReserveButton";
import ToggleButtonTrio from "../../components/atoms/ToggleButtonTrio";

const StyledInventoryDetail = styled.div`
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
      #84fab0 0%,
      #8fd3f4 51%,
      #84fab0 100%
    );

    :hover {
      border: 3px black solid;
    }

    :active {
      background-position: right center; /* change the direction of the change here */
    }
  }
`;

function InventoryDetail() {
  const { item_id } = useParams();
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    HTTPClient.get("/inventory/" + item_id + "/retrieve/").then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
  }, []);

  function handleReservation() {
    console.log("Make reservation for item", item_id);
    const requestData = {
      item_id: item_id,
      duration: duration,
    };

    HTTPClient.post("/booking/create/", requestData)
      .then((res) => {
        navigate("/bookings/" + res.data.id + "/");
      })
      .catch((err) => console.log(err));
  }

  function costPerHour(value) {
    return (value / 100).toFixed(2);
  }

  return (
    <StyledInventoryDetail>
      <TopNavigationBar />
      <h1>{response.name}</h1>
      <h3>{InventoryState(response.state)}</h3>
      <div>
        <h2 className={"inline"}>£{costPerHour(response.cost_per_hour)}</h2>
        <ToggleButtonTrio duration={duration} setDuration={setDuration} />
      </div>
      <ReserveButton text={"Reserve"} onClick={handleReservation} />
    </StyledInventoryDetail>
  );
}

export default InventoryDetail;

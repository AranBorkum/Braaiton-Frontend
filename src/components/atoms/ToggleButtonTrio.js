import { ToggleButton } from "@mui/material";
import { useState } from "react";

function ToggleButtonTrio({ duration, setDuration }) {
  const [b1, setB1] = useState(true);
  const [b2, setB2] = useState(false);
  const [b3, setB3] = useState(false);

  const activateB1 = () => {
    setB1(true);
    setB2(false);
    setB3(false);
    setDuration(1);
  };
  const activateB2 = () => {
    setB1(false);
    setB2(true);
    setB3(false);
    setDuration(2);
  };
  const activateB3 = () => {
    setB1(false);
    setB2(false);
    setB3(true);
    setDuration(4);
  };

  return (
    <>
      <ToggleButton value="check" selected={b1} onChange={activateB1}>
        1h
      </ToggleButton>
      <ToggleButton value="check" selected={b2} onChange={activateB2}>
        2h
      </ToggleButton>
      <ToggleButton value="check" selected={b3} onChange={activateB3}>
        4h
      </ToggleButton>
    </>
  );
}

export default ToggleButtonTrio;

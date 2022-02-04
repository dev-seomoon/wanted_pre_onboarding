import React, { useState } from "react";
import ToggleStyled from "./Toggle.styles";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(prev => !prev);

  return (
    <>
      <ToggleStyled>
        <ToggleStyled.Background toggle={toggle} />
        <ToggleStyled.ToggleButton toggle={toggle} onClick={onToggle} />
      </ToggleStyled>
      <ToggleStyled.Description>Toggle Switch {toggle ? "ON" : "OFF"}</ToggleStyled.Description>
    </>
  );
};

export default Toggle;

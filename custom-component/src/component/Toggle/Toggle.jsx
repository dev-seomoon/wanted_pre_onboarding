import React, { useState } from "react";
import ToggleStyled, { Background, Button, Description } from "./Toggle.styles";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(prev => !prev);

  return (
    <>
      <ToggleStyled>
        <Background toggle={toggle} />
        <Button toggle={toggle} onClick={onToggle} />
      </ToggleStyled>
      <Description>Toggle Switch {toggle ? "ON" : "OFF"}</Description>
    </>
  );
};

export default Toggle;

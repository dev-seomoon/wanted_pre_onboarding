import React from "react";
import useToggle from "../../hook/useToggle";
import ToggleStyled, { Background, Button, Description } from "./Toggle.styles";

const Toggle = () => {
  const { toggle, onClick } = useToggle(false);
  return (
    <>
      <ToggleStyled>
        <Background toggle={toggle} />
        <Button toggle={toggle} onClick={onClick} />
      </ToggleStyled>
      <Description>Toggle Switch {toggle ? "ON" : "OFF"}</Description>
    </>
  );
};

export default Toggle;

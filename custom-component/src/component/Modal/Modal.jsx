import React, { useState } from "react";
import ModalStyled from "./Modal.styles";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ModalStyled>
      <ModalStyled.Overlay isOpen={isOpen} />
      <ModalStyled.Box isOpen={isOpen}>
        Hello, Modal!
        <ModalStyled.Box.CloseButton onClick={handleClose} />
      </ModalStyled.Box>
      <ModalStyled.Button onClick={handleOpen}>Open Modal</ModalStyled.Button>
    </ModalStyled>
  );
};

export default Modal;

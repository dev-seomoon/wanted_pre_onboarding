import React, { useState } from "react";
import ModalStyled, { Overlay, ModalBox, OpenModalButton } from "./Modal.styles";

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
      <Overlay isOpen={isOpen} />
      <ModalBox isOpen={isOpen}>
        Hello, Modal!
        <ModalBox.CloseButton onClick={handleClose} />
      </ModalBox>
      <OpenModalButton onClick={handleOpen}>Open Modal</OpenModalButton>
    </ModalStyled>
  );
};

export default Modal;

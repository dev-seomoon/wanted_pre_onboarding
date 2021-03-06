import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ModalBox = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  width: 300px;
  height: 200px;
  background: #fff;
  border-radius: 20px;
  z-index: 100;
`;

ModalBox.CloseButton = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 15px;
  :before,
  :after {
    position: absolute;
    left: 14px;
    content: " ";
    height: 30px;
    width: 2px;
    background-color: #777;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

export const OpenModalButton = styled.button`
  width: 130px;
  height: 45px;
  color: #fff;
  background: #3366ff;
  border-radius: 30px;
  cursor: pointer;
`;

export default ModalStyled;

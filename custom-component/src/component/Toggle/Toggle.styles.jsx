import styled from "styled-components";

const ToggleStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  height: 37px;
  background: ${({ toggle }) => (toggle ? "#3366ff" : "#eee")};
  border-radius: 30px;
  padding: 0 8px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #3366ff;
  left: ${({ toggle }) => (toggle ? "0" : "-90px")};
  transition: left 0.5s;
`;

export const Button = styled.div`
  position: absolute;
  left: ${({ toggle }) => (toggle ? "calc(100% - 32px)" : "8px")};
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 100%;
  cursor: pointer;
  z-index: 1;
  transition: left 0.5s;
`;

export const Description = styled.p``;

export default ToggleStyled;

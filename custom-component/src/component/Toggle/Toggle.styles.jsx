import styled from "styled-components";

const ToggleStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  height: 37px;
  background: ${({ toggle }) => (toggle ? "purple" : "#eee")};
  border-radius: 30px;
  padding: 0 8px;
  box-sizing: border-box;
  overflow: hidden;
`;

ToggleStyled.Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: purple;
  left: ${({ toggle }) => (toggle ? "0" : "-90px")};
  transition: left 0.5s;
`;

ToggleStyled.ToggleButton = styled.div`
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

export default ToggleStyled;

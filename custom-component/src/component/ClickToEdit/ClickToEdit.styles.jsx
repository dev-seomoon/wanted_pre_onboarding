import styled from "styled-components";

const ClickToEditStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    display: block;
  }
  input {
    width: 200px;
    height: 40px;
    margin: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  div {
    margin-top: 20px;
  }
`;

export default ClickToEditStyled;

import styled from "styled-components";

const ClickToEditStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormItem = styled.label`
  display: block;
`;

FormItem.Input = styled.input`
  width: 200px;
  height: 40px;
  margin: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const FormResult = styled.div`
  margin-top: 20px;
`;

export default ClickToEditStyled;

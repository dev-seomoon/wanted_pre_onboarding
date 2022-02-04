import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 90%;
  min-width: 450px;
  height: 380px;
  border: 1px solid #aaa;
  border-radius: 10px;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 17px;
    margin-bottom: 20px;
  }
`;

ContainerStyled.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 60px);
`;

export default ContainerStyled;

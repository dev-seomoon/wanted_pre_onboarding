import styled from "styled-components";

const TagStyled = styled.div`
  width: 80%;
  min-width: 400px;
  height: 50px;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;

  ul {
    display: flex;
  }

  li {
    display: flex;
    align-items: center;
    color: #fff;
    background: purple;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    padding: 0 10px;

    button {
      width: 14px;
      height: 14px;
      font-size: 12px;
      text-align: center;
      color: purple;
      background: #fff;
      border-radius: 100%;
      margin-left: 8px;
      cursor: pointer;
    }
  }

  input {
    border: none;
    outline: none;
  }
`;

export default TagStyled;

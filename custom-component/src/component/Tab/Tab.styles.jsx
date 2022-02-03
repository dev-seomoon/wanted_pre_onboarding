import styled from "styled-components";

const TabStyled = styled.div`
  width: 80%;
`;

TabStyled.Nav = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: #eee;
    height: 30px;
  }

  li {
    width: 30%;
    line-height: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  li.active {
    background: purple;
    color: #fff;
    transition: all 0.3s;
  }
`;

TabStyled.Content = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TabStyled;

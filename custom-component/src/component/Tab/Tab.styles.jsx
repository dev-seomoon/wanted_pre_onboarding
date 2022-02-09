import styled from "styled-components";

const TabStyled = styled.div`
  width: 100%;
`;

TabStyled.Nav = styled.nav``;

export const TabList = styled.ul`
  width: 100%;
  height: 40px;
  background: #eee;
  display: flex;
  justify-content: flex-end;
`;

TabList.Item = styled.li`
  width: 30%;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &.active {
    background: #3366ff;
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

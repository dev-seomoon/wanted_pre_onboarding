import styled from "styled-components";

const TagStyled = styled.div`
  width: 100%;
  min-width: 200px;
  height: 50px;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
`;

export const TagList = styled.ul`
  display: flex;
`;

TagList.Item = styled.li`
  display: flex;
  align-items: center;
  color: #fff;
  background: #3366ff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 0 10px;
`;

export const DeleteTagButton = styled.button`
  width: 14px;
  height: 14px;
  font-size: 12px;
  text-align: center;
  color: #3366ff;
  background: #fff;
  border-radius: 100%;
  margin-left: 8px;
  cursor: pointer;
`;

export const TagInput = styled.input`
  border: none;
  outline: none;
`;

export default TagStyled;

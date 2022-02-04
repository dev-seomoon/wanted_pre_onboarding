import styled from "styled-components";

const AutoCompleteStyled = styled.div`
  width: 80%;
  position: relative;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: ${({ showSuggestion }) => (showSuggestion ? "15px 15px 0 0" : "15px")};
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 15px;
  :focus {
    box-shadow: ${({ showSuggestion }) => (showSuggestion ? "none" : "0 5px 5px #bbb")};
    outline: none;
  }
`;

export const ResetButton = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 18px;
  right: 10px;
  text-align: center;
  cursor: pointer;
  :after {
    content: "×";
    font-size: 20px;
    line-height: 15px;
    color: #313131;
  }
`;

export const SuggestionField = styled.ul`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 5px 5px #bbb;
  padding: 10px;
  box-sizing: border-box;

  li {
    line-height: 20px;
  }
  li:hover {
    background: #eee;
  }
`;

export default AutoCompleteStyled;

import React from "react";
import { createGlobalStyle } from "styled-components";
import Toggle from "./component/Toggle/Toggle";
import Modal from "./component/Modal/Modal";
import Tab from "./component/Tab/Tab";
import Tag from "./component/Tag/Tag";
import AutoComplete from "./component/AutoComplete/AutoComplete";
import ClickToEdit from "./component/ClickToEdit/ClickToEdit";

function App() {
  return (
    <>
      <div className="App">
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </div>
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  button {
    border: none;
  }
`;

export default App;

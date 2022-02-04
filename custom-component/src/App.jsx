import React from "react";
import { createGlobalStyle } from "styled-components";
import Toggle from "./component/Toggle/Toggle";
import Modal from "./component/Modal/Modal";
import Tab from "./component/Tab/Tab";
import Tag from "./component/Tag/Tag";
import AutoComplete from "./component/AutoComplete/AutoComplete";
import ClickToEdit from "./component/ClickToEdit/ClickToEdit";
import Container from "./component/Container/Container";

function App() {
  return (
    <>
      <div className="App">
        <Container title="Toggle">
          <Toggle />
        </Container>
        <Container title="Modal">
          <Modal />
        </Container>
        <Container title="Tab">
          <Tab />
        </Container>
        <Container title="Tag">
          <Tag />
        </Container>
        <Container title="Auto Complete">
          <AutoComplete />
        </Container>
        <Container title="Click To Edit">
          <ClickToEdit />
        </Container>
      </div>
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  button {
    border: none;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h2 {
    margin: 0;
  }
`;

export default App;

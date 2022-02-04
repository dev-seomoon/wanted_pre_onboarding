import React from "react";
import ContainerStyled from "./Container.styles";

// eslint-disable-next-line react/prop-types
const Container = ({ title, children }) => (
  <ContainerStyled>
    <h2>{title}</h2>
    <ContainerStyled.Content>{children}</ContainerStyled.Content>
  </ContainerStyled>
);

export default Container;

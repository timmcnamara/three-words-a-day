import React from "react";
import styled from "styled-components";
import { dark, light } from "../../styles/styleGuide";
import Logo from "../Logo";

const Nav = styled.header`
  background: ${props => (props.darkTheme ? dark : light)};
  color: ${props => (props.darkTheme ? light : dark)};
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: start;
  letter-spacing: 1px;
  padding-left: 20px;
`;

const NavigationView = () => (
  <Nav darkTheme>
    <Logo />
  </Nav>
);

export default NavigationView;

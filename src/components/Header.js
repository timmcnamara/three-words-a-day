import React from "react";
import styled from "styled-components";
import { dark, light } from "../styles/styleGuide";

const Nav = styled.header`
  background: ${dark};
  color: ${light};
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: start;
  letter-spacing: 1px;
  padding-left: 20px;
`;
const Title = styled.h1`
  font-size: 1em;
  color: ${light};
`;

const Header = () => (
  <Nav>
    <Title>Three Words A Day</Title>
  </Nav>
);

export default Header;

import React from "react";
import styled from "styled-components";
import { light } from "../../styles/styleGuide";

const Icon = styled.svg`
  fill: ${light};
  width: 48px;
  height: 48px;
`;

const Logo = () => (
  <Icon viewBox="0 0 20 20">
    <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
  </Icon>
);

export default Logo;

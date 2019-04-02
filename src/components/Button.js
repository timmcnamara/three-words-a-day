import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark } from "../styles/styleGuide";

// Change the name of the styled component?
const Btn = styled.button`
  background: white;
  color: ${dark};
  font-size: 1em;
  margin: 1em;
  padding: 0.75em 2em;
  border: 2px solid ${dark};
  border-radius: 3px;
  text-transform: uppercase;
`;

// Or the name of the component?
const Button = props => <Btn>{props.title}</Btn>;

Button.propTypes = {
  title: PropTypes.string
};

export default Button;

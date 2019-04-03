import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark } from "../styles/styleGuide";

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

const Button = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark, light } from "../styles/styleGuide";

const Btn = styled.button`
  background: ${dark};
  color: ${light};
  font-size: 1em;
  font-weight: 700;
  margin: 10px;
  padding: 0.75em 2em;
  border: 2px solid ${dark};
  border-radius: 3px;
  text-transform: uppercase;
`;

const Button = ({ text, onClick }) => {
  return (
    <Btn data-testid="button-global" onClick={onClick}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark } from "../styles/styleGuide";

const InputStyled = styled.input`
  background: white;
  color: ${dark};
  font-size: 1em;
  margin: 10px;
  padding: 0.75em 1em;
  border: 2px solid ${dark};
  border-radius: 3px;
  min-width: 250px;
`;

const TextInput = ({ placeholder, onChange, onKeyDown }) => {
  return (
    <InputStyled
      aria-label="input"
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyDown}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default TextInput;

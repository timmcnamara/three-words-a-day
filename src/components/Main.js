import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 50px;
  text-align: center;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Expand your vocabularly by learning just three new words a day</h1>
        <Button title="Get my three words" />
      </Wrapper>
    );
  }
}

export default Main;

Main.propTypes = {
  name: PropTypes.string
};

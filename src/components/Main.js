import React, { Component } from "react";
import PropTypes from "prop-types";
import Headline from "./Headline";
import SeachContainer from "./SearchContainer";
import styled from "styled-components";
import List from "./List";

const Wrapper = styled.main`
  padding: 50px;
  text-align: center;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Headline title="Make a sentence with any word..." />
        <SeachContainer />
        <List />
      </Wrapper>
    );
  }
}

export default Main;

Main.propTypes = {
  name: PropTypes.string
};

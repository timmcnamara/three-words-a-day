import React, { Component } from "react";
import PropTypes from "prop-types";
import Headline from "./Headline";
import SeachContainer from "./SearchContainer";
import styled from "styled-components";
import Content from "./Content";
import { ApiConsumer } from "../context/ApiContext";
import { BarLoader } from "react-spinners";

const Wrapper = styled.main`
  padding: 50px;
  text-align: center;
`;

const WrapperDiv = styled.div`
  padding-top: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Headline title="Make a sentence with any word..." />
        <SeachContainer />
        <ApiConsumer>
          {context =>
            context.loading ? (
              <WrapperDiv>
                <BarLoader height={6} width={100} />
              </WrapperDiv>
            ) : (
              <Content />
            )
          }
        </ApiConsumer>
      </Wrapper>
    );
  }
}

export default Main;

Main.propTypes = {
  name: PropTypes.string
};

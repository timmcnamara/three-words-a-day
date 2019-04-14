import React, { Component } from "react";
import PropTypes from "prop-types";
import HeadlineView from "../HeadlineView";
import SearchView from "../SearchView";
import styled from "styled-components";
import SearchResultsView from "../SearchResultsView";
import { ApiConsumer } from "../Store";
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

class MainView extends Component {
  render() {
    return (
      <Wrapper>
        <HeadlineView title="Make a sentence with any word..." />
        <SearchView />
        <ApiConsumer>
          {context =>
            context.loading ? (
              <WrapperDiv>
                <BarLoader height={6} width={100} />
              </WrapperDiv>
            ) : (
              <SearchResultsView />
            )
          }
        </ApiConsumer>
      </Wrapper>
    );
  }
}

MainView.propTypes = {
  name: PropTypes.string
};

export default MainView;

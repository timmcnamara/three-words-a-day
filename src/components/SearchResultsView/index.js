import React from "react";
import { ApiConsumer } from "../Store";
import styled from "styled-components";

const Div = styled.div`
  display: block;
  padding-top: 40px;
`;

const SearchResultsView = () => {
  return (
    <ApiConsumer>
      {context => (
        <Div>
          <h1 data-testid="results">{context.results}</h1>
        </Div>
      )}
    </ApiConsumer>
  );
};

export default SearchResultsView;

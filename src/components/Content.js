import React from "react";
import { ApiConsumer } from "../context/ApiContext";
import styled from "styled-components";

const Div = styled.div`
  display: block;
  padding-top: 40px;
`;

const Content = () => {
  return (
    <ApiConsumer>
      {context => (
        <Div>
          <h1>{context.results}</h1>
        </Div>
      )}
    </ApiConsumer>
  );
};

export default Content;
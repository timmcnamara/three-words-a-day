import React from "react";
import { ApiConsumer } from "../context/ApiContext";

const List = () => {
  return (
    <ApiConsumer>
      {context => (
        <React.Fragment>
          <h1>{context.results}</h1>
        </React.Fragment>
      )}
    </ApiConsumer>
  );
};

export default List;

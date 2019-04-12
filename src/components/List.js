import React from "react";
import { ApiConsumer } from "../context/ApiContext";

const List = () => {
  return (
    <ApiConsumer>
      {context => (
        <React.Fragment>
          <h1>{context.name}</h1>
          <button onClick={context.updateName}>click me</button>
        </React.Fragment>
      )}
    </ApiConsumer>
  );
};

export default List;

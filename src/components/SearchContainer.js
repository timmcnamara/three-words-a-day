import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import { ApiConsumer } from "../context/ApiContext";

const SearchContainer = () => {
  return (
    <ApiConsumer>
      {context => (
        <React.Fragment>
          <TextInput
            placeholder="Enter any word"
            onChange={context.handleChange}
            onKeyDown={context.handleKeyDown}
          />
          <Button onClick={context.handleClick} text="Get it" />
        </React.Fragment>
      )}
    </ApiConsumer>
  );
};

export default SearchContainer;

import React, { Fragment } from "react";
import Button from "../Button";
import SearchInput from "../SearchInput";
import { ApiConsumer } from "../Store";

const SearchView = () => {
  return (
    <ApiConsumer>
      {context => (
        <Fragment>
          <SearchInput
            placeholder="Enter any word"
            onChange={context.handleChange}
            onKeyDown={context.handleKeyDown}
          />
          <Button onClick={context.handleClick} text="Show" />
        </Fragment>
      )}
    </ApiConsumer>
  );
};

export default SearchView;

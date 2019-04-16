import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { ApiContext } from "../Store";
import SearchResultsView from ".";

afterEach(cleanup);
describe("<SearchResultsView>", () => {
  test("No results displayed on page load", () => {
    const { getByTestId } = render(<SearchResultsView />);
    expect(getByTestId("results")).toHaveTextContent("");
  });

  test(" shows value from provider", () => {
    const value = {
      word: "xxx",
      results: ["Text"],
      loading: false
    };

    const tree = (
      <ApiContext.Provider value={value}>
        <SearchResultsView />
      </ApiContext.Provider>
    );

    const { getByTestId } = render(tree);

    expect(getByTestId("results")).toHaveTextContent("Text");
  });
});

import { render, cleanup } from "react-testing-library";
import React from "react";
import SearchView from ".";
import "jest-dom/extend-expect";

afterEach(cleanup);

// run a snapshot
it("render SearchContainer component", () => {
  const { asFragment } = render(<SearchView />);
  expect(asFragment()).toMatchSnapshot();
});

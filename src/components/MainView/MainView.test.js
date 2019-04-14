import { render, cleanup } from "react-testing-library";
import React from "react";
import MainView from ".";
import "jest-dom/extend-expect";

afterEach(cleanup);

// run a snapshot
it("render SearchContainer component", () => {
  const { asFragment } = render(<MainView />);
  expect(asFragment()).toMatchSnapshot();
});

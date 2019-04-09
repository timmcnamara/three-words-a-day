import { render, cleanup } from "react-testing-library";
import React from "react";
import Main from "../components/Main";
import "jest-dom/extend-expect";

afterEach(cleanup);

// run a snapshot
it("render SearchContainer component", () => {
  const { asFragment } = render(<Main />);
  expect(asFragment()).toMatchSnapshot();
});

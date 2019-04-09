import { render, cleanup } from "react-testing-library";
import React from "react";
import SearchContainer from "../components/SearchContainer";
import "jest-dom/extend-expect";

afterEach(cleanup);

// run a snapshot
it("render SearchContainer component", () => {
  const { asFragment } = render(<SearchContainer />);
  expect(asFragment()).toMatchSnapshot();
});

it("onchange function to return ... ", () => {});

it("onClick function ... ", () => {});

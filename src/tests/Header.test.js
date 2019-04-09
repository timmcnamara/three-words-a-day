import { render, cleanup } from "react-testing-library";
import React from "react";
import Header from "../components/Header";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders header component", () => {
  const { asFragment } = render(<Header />);

  // run a snapshot
  expect(asFragment()).toMatchSnapshot();
});

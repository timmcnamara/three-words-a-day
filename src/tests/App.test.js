import { render, cleanup } from "react-testing-library";
import React from "react";
import App from "../App";
import "jest-dom/extend-expect";

afterEach(cleanup);

// run a snapshot
it("render App component", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

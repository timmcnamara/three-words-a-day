import { render, cleanup } from "react-testing-library";
import React from "react";
import NavigationView from ".";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders navigation component", () => {
  const { asFragment } = render(<NavigationView />);

  // run a snapshot
  expect(asFragment()).toMatchSnapshot();
});

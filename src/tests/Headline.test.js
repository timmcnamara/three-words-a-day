import { render, cleanup } from "react-testing-library";
import React from "react";
import Headline from "../components/Headline";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders headline component", () => {
  const { asFragment } = render(<Headline text="hello" />);

  // run a snapshot
  expect(asFragment()).toMatchSnapshot();
});

it("renders headline text", () => {
  const { getByText } = render(<Headline title="hello" />);
  expect(getByText("hello")).toBeInTheDocument();
});

import { render, cleanup } from "./node_modules/react-testing-library";
import React from "./node_modules/react";
import HeadlineView from ".";
import "./node_modules/jest-dom/extend-expect";

afterEach(cleanup);

describe("<HeadlineView />", () => {
  it("renders headline component", () => {
    const { asFragment } = render(<HeadlineView text="hello" />);

    // run a snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders headline text", () => {
    const { getByText } = render(<HeadlineView title="hello" />);
    expect(getByText("hello")).toBeInTheDocument();
  });
});

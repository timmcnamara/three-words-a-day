import { render, cleanup } from "react-testing-library";
import React from "react";
import Logo from ".";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Logo/>", () => {
  it("renders navigation component", () => {
    const { asFragment } = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
  });
});

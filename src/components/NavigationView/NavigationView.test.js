import { render, cleanup } from "react-testing-library";
import React from "react";
import NavigationView from ".";
import "jest-dom/extend-expect";

afterEach(cleanup);

const props = {
  darktheme: true
};

describe("<NavigationView />", () => {
  it("renders navigation component", () => {
    const { asFragment, debug } = render(<NavigationView {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

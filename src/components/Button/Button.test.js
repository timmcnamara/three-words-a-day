import { render, cleanup } from "react-testing-library";
import React from "react";
import Button from "./";
import "jest-dom/extend-expect";

const props = {
  text: "hello",
  onClick: jest.fn()
};

afterEach(cleanup);

describe("<Button />", () => {
  it("render button component", () => {
    const { asFragment } = render(<Button {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("test a random function", () => {});

  it("renders text on button", () => {
    const { getByTestId } = render(<Button {...props} />);
    expect(getByTestId("button-global")).toHaveTextContent("hello");
  });

  it("calls onClick when user clicks", () => {
    const { getByTestId } = render(<Button {...props} />);

    getByTestId("button-global").click();

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});

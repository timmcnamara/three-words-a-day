import { render, cleanup, fireEvent } from "react-testing-library";
import React from "react";
import TextInput from "../components/TextInput";
import "jest-dom/extend-expect";

const props = {
  placeholder: "placeholder",
  onChange: jest.fn()
};

afterEach(cleanup);

it("render TextInput component", () => {
  const { asFragment } = render(<TextInput />);
  // run a snapshot
  expect(asFragment()).toMatchSnapshot();
});

it("renders the placeholder text", () => {
  const { getByPlaceholderText } = render(<TextInput {...props} />);
  const { placeholder } = getByPlaceholderText("placeholder");
  expect(placeholder).toBe("placeholder");
});

it("Calls onChange function on change", () => {
  const { getByLabelText } = render(<TextInput {...props} />);
  fireEvent.change(getByLabelText("input"), { target: { value: "update" } });
  expect(props.onChange).toBeCalled();
});

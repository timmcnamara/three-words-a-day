import { render, cleanup, fireEvent } from "react-testing-library";
import React from "react";
import SearchInput from ".";
import "jest-dom/extend-expect";

const props = {
  placeholder: "placeholder",
  onChange: jest.fn()
};

afterEach(cleanup);

it("render TextInput component", () => {
  const { asFragment } = render(<SearchInput />);
  // run a snapshot
  expect(asFragment()).toMatchSnapshot();
});

it("renders the placeholder text", () => {
  const { getByPlaceholderText } = render(<SearchInput {...props} />);
  const { placeholder } = getByPlaceholderText("placeholder");
  expect(placeholder).toBe("placeholder");
});

it("Calls onChange function on change", () => {
  const { getByLabelText } = render(<SearchInput {...props} />);
  fireEvent.change(getByLabelText("input"), { target: { value: "update" } });
  expect(props.onChange).toBeCalled();
});

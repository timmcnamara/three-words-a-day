import { render, cleanup, fireEvent } from "react-testing-library";
import React from "react";
import SearchInput from ".";
import "jest-dom/extend-expect";

const props = {
  placeholder: "placeholder",
  onChange: jest.fn(),
  onKeyDown: jest.fn()
};

afterEach(cleanup);

describe("<SearchInput />", () => {
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

  it("Calls onKeyPress function on key press", () => {
    const { getByLabelText } = render(<SearchInput {...props} />);
    fireEvent.keyPress(getByLabelText("input"), {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    // ## Not working here?
    expect(props.onKeyDown).toHaveBeenCalled();
  });
});

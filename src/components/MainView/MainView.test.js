import { render, cleanup, waitForElement } from "react-testing-library";
import React from "react";
import MainView from ".";
import "jest-dom/extend-expect";
import { ApiContext } from "../../Store";

afterEach(cleanup);

describe("<MainView />", () => {
  test("render SearchContainer component", () => {
    const { asFragment } = render(<MainView />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Display barloader when loading", () => {
    const value = {
      word: "xxx",
      results: ["Text"],
      loading: true
    };

    const tree = (
      <ApiContext.Provider value={value}>
        <MainView />
      </ApiContext.Provider>
    );

    const { getByTestId } = render(tree);
    expect(getByTestId("barloader")).toBeTruthy();
  });
});

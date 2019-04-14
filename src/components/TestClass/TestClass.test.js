import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

test("xx", () => {
  expect(true).toBe(true);
});

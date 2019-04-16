import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import { ApiContext, ApiProvider, ApiConsumer } from ".";
import { add, integrate } from "../API";

afterEach(cleanup);

test("run a passing test", () => {
  expect(1).toBe(1);
});

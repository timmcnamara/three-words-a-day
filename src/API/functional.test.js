import axios from "axios";
import { apiInstance, getDefinition } from "./functional";
const baseURL = "www.example.com";

jest.mock("axios");
axios.create = jest.fn();
axios.get = jest.fn();

test("getDefinition() fetches and returns data", async () => {
  // return an object
  const getFunc = jest.fn();
  getFunc.mockReturnValue({ data: "xxx" });

  axios.create.mockReturnValue({
    get: getFunc
  });

  const actualOutput = getDefinition();

  expect(actualOutput).resolves.toEqual("xxx");
});

test("When createing axios instance, baseURL is passed as a param", () => {
  // setup
  let arg = { baseURL: "xxx" };

  // call function
  const api = apiInstance("xxx");

  //expect
  expect(axios.create).toBeCalledWith(arg);
});

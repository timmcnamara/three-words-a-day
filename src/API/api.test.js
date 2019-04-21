import APIService from ".";
import axios from "axios";

//const api = new APIService();
jest.mock("axios");

//mock axios create
axios.create = jest.fn();

test("When creating an API services, the Baseurl and options params are called", () => {
  const api = new APIService("example.com", { name: "xxx" });
  expect(axios.create).toHaveBeenCalledWith({
    name: "xxx",
    baseURL: "example.com"
  });
});

test("When we make a request to the API, the correct params are called", () => {
  // return an object
  const getFunc = jest.fn();
  axios.create.mockReturnValue({
    get: getFunc
  });

  // check get is called..
  const api = new APIService("example.com", { name: "xxx" });

  api.fetchDefinition("car");

  expect(getFunc).toHaveBeenCalledWith("/words", {
    params: {
      word: "car"
    }
  });
});

test("When the API is called, fetchDefinition returns an object with string", () => {
  // the class usues axios.create...
  axios.create = jest.fn();

  // return an object
  const getFunc = jest.fn();
  getFunc.mockReturnValue({ data: "xxx" });

  axios.create.mockReturnValue({
    get: getFunc
  });

  const api = new APIService("example.com", { name: "xxx" });
  const returnVal = api.fetchDefinition("car");

  expect(returnVal).resolves.toEqual("xxx");
});

test("When the API is called with  with return error", () => {
  //axios.create = jest.fn();

  // return an object
  const getFunc = jest.fn();

  // we tell it to return an error
  getFunc.mockRejectedValue("Please try again");

  axios.create.mockReturnValue({
    get: getFunc
  });

  const api = new APIService("example.com", { name: "xxx" });
  const returnVal = api.fetchDefinition("car");

  expect(returnVal).resolves.toEqual("Please try again");
});

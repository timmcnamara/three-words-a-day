import axios from "axios";
const baseURL = process.env.REACT_APP_DEFAULT_BASE_URL;

export const apiInstance = (baseURL, options = {}) => {
  return axios.create({
    baseURL
  });
};

export const getDefinition = async word => {
  try {
    const { data } = await apiInstance(baseURL).get("/words", {
      params: {
        word: word
      }
    });
    return data;
  } catch (err) {
    return "Please try again";
  }
};

import axios from "axios";

const dotenv = require("dotenv").config();
//const { REACT_APP_DEFAULT_BASE_URL } = dotenv.parsed;

//const DEFAULT_BASE_URL = REACT_APP_DEFAULT_BASE_URL;
const DEFAULT_BASE_URL = "http://localhost:3001/api";
class APIService {
  /**
   * Create a new instance of Axios
   * @param {String} baseURL
   * @param {*} options - AxiosConfig
   */
  constructor(baseURL = DEFAULT_BASE_URL, options = {}) {
    this.request = axios.create({
      ...options,
      baseURL
    });
  }

  /**
   * Fetch definition from server
   * @param {String} word
   */
  async fetchDefinition(word) {
    try {
      const { data } = await this.request.get("/words", {
        params: {
          word: word
        }
      });

      return Promise.resolve(data);
    } catch (err) {
      Promise.reject(err);
    }
  }
}

export default APIService;

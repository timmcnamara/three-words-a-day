import axios from "axios";

//const DEFAULT_BASE_URL = process.env.REACT_APP_DEFAULT_BASE_URL;
class APIService {
  /**
   * Create a new instance of Axios
   * @param {String} baseURL
   * @param {*} options - AxiosConfig
   */
  constructor(baseURL = "http://localhost:3001/api", options = {}) {
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
    let baseURL = process.env.REACT_APP_DEFAULT_BASE_URL;
    const instance = axios.create({
      baseURL
    });

    try {
      const { data } = await instance.get("/words", {
        params: {
          word: word
        }
      });

      return data;
    } catch (err) {
      return "Please try again";
    }
  }
}

export default APIService;

import axios from "axios";

const DEFAULT_BASE_URL = process.env.REACT_APP_DEFAULT_BASE_URL;
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

      return data;
    } catch (err) {
      return "Please try again";
    }
  }
}

export default APIService;

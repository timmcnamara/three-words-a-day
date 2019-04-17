import React, { Component } from "react";
import APIService from "../API";
// Default State
export const data = {
  word: "",
  results: [],
  loading: false
};

export const apiService = new APIService();

// Create Context
export const ApiContext = React.createContext(data);

// Create Consumer
export const ApiConsumer = ApiContext.Consumer;

// Create Provider
class ApiProvider extends Component {
  constructor() {
    super();

    this.state = {
      word: "",
      results: [],
      loading: false
    };

    // Bind Events
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Events
  handleClick(e) {
    e.preventDefault();
    this.fetchDefinition();
  }

  // not required if you form tags in JSX
  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.fetchDefinition();
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      word: e.target.value.trim()
    });
  }

  async fetchDefinition() {
    try {
      this.setState(prevState => ({
        loading: !prevState.loading
      }));

      const data = await apiService.fetchDefinition(this.state.word);

      this.setState(prevState => ({
        results: data,
        loading: !prevState.loading
      }));
    } catch (err) {
      this.setState({
        results: "Please try a different word",
        loading: false
      });
      console.log(err);
    }
  }

  render() {
    return (
      <ApiContext.Provider
        value={{
          ...this.state,
          handleClick: this.handleClick,
          handleChange: this.handleChange,
          handleKeyDown: this.handleKeyDown
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}

export default ApiProvider;

import React, { Component } from "react";
import axios from "axios";
// Default State
export const data = {
  name: "",
  updateName: () => {}
};

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
      results: []
    };

    //this.updateName = this.updateName.bind(this);
    //this.fetchDefinition = this.fetchDefinition.bind(this);

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
    this.setState({ word: e.target.value.trim() });
  }

  // Helper Methods
  fetchDefinition = async () => {
    let res = await axios.get("http://localhost:3001/api/words", {
      params: {
        word: this.state.word
      }
    });
    this.setState({
      results: res.data
    });
  };

  updateName() {
    console.log("callued update name from Store");
    this.setState({ name: "charlie" });
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

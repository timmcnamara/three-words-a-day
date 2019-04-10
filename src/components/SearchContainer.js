import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import axios from "axios";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      results: []
    };

    // Bind Events
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Events
  handleClick(e) {
    e.preventDefault();
    this.getDefinition();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ word: e.target.value.trim() });
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.getDefinition();
    }
  }

  // Helper Methods
  getDefinition = async () => {
    let res = await axios.get("http://localhost:3001/api/words", {
      params: {
        word: this.state.word
      }
    });
    this.setState({
      results: res.data
    });
  };

  render() {
    return (
      <React.Fragment>
        <TextInput
          placeholder="Enter any word"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <Button onClick={this.handleClick} text="Get it" />
      </React.Fragment>
    );
  }
}

export default SearchContainer;

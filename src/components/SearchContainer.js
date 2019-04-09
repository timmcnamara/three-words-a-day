import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";

class SearchContainer extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log("Submitting....");
  }

  onChange(e) {
    e.preventDefault();
    console.log("change detected");
  }

  render() {
    return (
      <React.Fragment>
        <TextInput placeholder="Enter any word" onChange={this.onChange} />
        <Button onClick={this.handleClick} text="Get it" />
      </React.Fragment>
    );
  }
}

export default SearchContainer;

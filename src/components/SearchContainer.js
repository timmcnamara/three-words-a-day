import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import axios from "axios";

class SearchContainer extends React.Component {
  handleClick(e) {
    e.preventDefault();
    // make call to api
    // send a param along to request the word
    console.log("Submitting....");
    axios
      .get("http://localhost:3001/api/words", {
        params: {
          word: "car"
        }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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

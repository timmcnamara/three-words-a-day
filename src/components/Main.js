import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.main`
  padding: 50px;
  text-align: center;
`;

class Main extends Component {
  handleClick() {
    let oxford = axios.create({
      headers: {
        app_id: `${process.env.REACT_APP_OXFORD_API_USER}`,
        app_key: `${process.env.REACT_APP_OXFORD_API_KEY}`
      }
    });
    // make api call
    console.log("making api call");
    oxford
      .get(
        "https://od-api.oxforddictionaries.com/api/v1/entries/en/ace/regions=us"
      )
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <Wrapper>
        <h1>Expand your vocabularly, dumb-ass.</h1>
        <Button onClick={this.handleClick} text="Get my three words" />
      </Wrapper>
    );
  }
}

export default Main;

Main.propTypes = {
  name: PropTypes.string
};

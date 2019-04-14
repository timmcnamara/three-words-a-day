import React, { Component } from "react";

class TestClass extends Component {
  constructor() {
    super();

    this.state = {};

    // Bind methods
    this.random = this.random.bind(this);
  }

  // random function
  random() {
    return 4;
  }
}

export default TestClass;

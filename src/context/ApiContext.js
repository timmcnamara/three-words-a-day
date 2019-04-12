import React, { Component } from "react";

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
      name: "tim"
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName() {
    console.log("callued update name from Store");
    this.setState({ name: "charlie" });
  }
  //{ ...this.state, updateName: this.updateName }
  render() {
    return (
      <ApiContext.Provider
        value={{ ...this.state, updateName: this.updateName }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}

export default ApiProvider;

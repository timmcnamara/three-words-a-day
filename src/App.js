import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ApiProvider from "./context/ApiContext";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ApiProvider>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      </ApiProvider>
    );
  }
}

export default App;

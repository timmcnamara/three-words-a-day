import React, { Component, Fragment } from "react";
import NavigationView from "../components/NavigationView";
import MainView from "../components/MainView";
import ApiProvider from "../components/Store";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ApiProvider>
        <Fragment>
          <NavigationView />
          <MainView />
        </Fragment>
      </ApiProvider>
    );
  }
}

export default App;

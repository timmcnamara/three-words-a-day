import React, { Component, Fragment } from "react";
import NavigationView from "../Components/NavigationView";
import MainView from "../Components/MainView";
import ApiProvider from "../Store";

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

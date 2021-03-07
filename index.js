/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import store from "./src/store/store";

export default class Index extends Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Index);

import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./routes/Routes";

import "./assets/scss/index.scss";

const browserHistory = createBrowserHistory();
export class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Routes />
      </Router>
    );
  }
}

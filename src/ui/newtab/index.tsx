import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./layout/App";
import navs from './data/nav';

ReactDOM.render(
    <Router>
      <App navs={navs} />
    </Router>,
    document.getElementById("app")
  );


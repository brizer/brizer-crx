import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/App";
import connect from "../connect";

async function start() {
  const connector = connect();
  window.addEventListener("unload", () => connector.disconnect());

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("app")
  );
}

start()
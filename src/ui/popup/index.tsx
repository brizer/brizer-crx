import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/App";
import connect from "../connect";
import { ExtensionData, ExtensionActions } from "definitions";

function renderApp(data: ExtensionData, actions: ExtensionActions) {
  ReactDOM.render(
    <Router>
      <App data={data} actions={actions} />
    </Router>,
    document.getElementById("app")
  );
}

async function start() {
  const connector = connect();
  window.addEventListener("unload", () => connector.disconnect());
  let data = {settings:{urls:[]}};
  try {
    data = await connector.getData();
    
  } catch (error) {
    console.error(error)
  }

  renderApp(data, connector);
}


start();


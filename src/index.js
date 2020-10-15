import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/Raleway-VariableFont_wght.ttf";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

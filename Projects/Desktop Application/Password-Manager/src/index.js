import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <App />
  </HashRouter>,
  document.getElementById("root")
);

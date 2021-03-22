//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

// configuration du routeur react pour le faire fonctionner avec le AR et R3F
const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Route
        component={({ history }) => {
          window.appHistory = history;
          return <App />;
        }}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

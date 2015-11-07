import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link } from "react-router";

let HomeComponent = (props) => {
  return (
    <div>
      <h1>It works!</h1>
    </div>
  );
}

React.render(
  <Router>
    <Route
      path="/" component={HomeComponent}
    />
  </Router>
, container); // container is defined as an ID existing in the DOM

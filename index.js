import React from "react";
import ReactDOM from "react-dom";

import es6promise from "es6-promise";
es6promise.polyfill();

import { Router, Route, Link } from "react-router";

import "./styles/bootstrap_imports.less";

ReactDOM.render(
  <Router>
    <Route
      path="/" component={require("./components/Application")}
    >
      <Route path="map" component={require("./components/Map")} />
    </Route>
  </Router>
, container); // container is defined as an ID existing in the DOM

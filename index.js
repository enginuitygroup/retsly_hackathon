import React from "react";
import ReactDOM from "react-dom";

import es6promise from "es6-promise";
es6promise.polyfill();

import { Router, Route, Link } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

import "./styles/bootstrap_imports.less";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route
      path="/" component={require("./components/Application")}
    >
      <Route path="map" component={require("./components/Map")} />
      <Route path="listing" component={require("./components/listing")} />
    </Route>
  </Router>
, container); // container is defined as an ID existing in the DOM

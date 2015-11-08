import React from "react";
import ReactDOM from "react-dom";

import "babel/polyfill";

import { Router, Route, IndexRoute, Link } from "react-router";
import history from "./history";

// this sets a global `L` because of Leaflet... :(
import "mapbox.js";
L.mapbox.accessToken = "pk.eyJ1IjoidGF6c2luZ2giLCJhIjoiRVNQcGw5OCJ9.GKf__kb42ilFSxwdxkLDWQ";
import "leaflet.heat";

import "./styles/bootstrap_imports.less";

ReactDOM.render(
  <Router history={history}>
    <Route
      path="/" component={require("./components/Application")}
    >
      <IndexRoute component={require("./components/Map")} />

      <Route path="listing" component={require("./components/Listing")} />
      <Route path="retsly_mls_data" component={require("./components/Retsly")} />
    </Route>
  </Router>
, container); // container is defined as an ID existing in the DOM

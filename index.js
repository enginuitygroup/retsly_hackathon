import React from "react";
import ReactDOM from "react-dom";

//import es6promise from "es6-promise";
//es6promise.polyfill();
import "babel/polyfill";

import { Router, Route, Link } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

// this sets a global `L` because of Leaflet... :(
import "mapbox.js";
L.mapbox.accessToken = "pk.eyJ1IjoidGF6c2luZ2giLCJhIjoiRVNQcGw5OCJ9.GKf__kb42ilFSxwdxkLDWQ";

import "./styles/bootstrap_imports.less";

ReactDOM.render(
  <Router>
    <Route
      path="/" component={require("./components/Application")}
    >
      <Route path="map" component={require("./components/Map")} />

      <Route path="listing" component={require("./components/Listing")} />
      <Route path="retsly_mls_data" component={require("./components/Retsly")} />
    </Route>
  </Router>
, container); // container is defined as an ID existing in the DOM

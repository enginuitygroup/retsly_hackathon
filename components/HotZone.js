import React from "react";
import { Action, connect } from "griffin.js";

import RetslyHotspotQuery from "../actions/RetslyHotspotQuery";

export default class HotZone extends React.Component {
  componentDidMount() {
    new RetslyHotspotQuery();
  }
  render() {
    return(
      <div id="hotspot">
        <h1>Hello</h1>
      </div>
    );
  }
}
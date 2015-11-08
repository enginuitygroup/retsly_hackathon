import React from "react";
import { Action, connect } from "griffin.js";

import RetslyHotspotQuery from "../actions/RetslyHotspotQuery";
import RetslyHotspotStore from "../stores/RetslyHotspotStore";

@connect({hotspotTotal: RetslyHotspotStore})
@connect({broadTotal: RetslyHotspotStore})

export default class HotZone extends React.Component {
  componentDidMount() {
    new RetslyHotspotQuery();
  }

  render() {
    return(
      <div id="hotspot">
        <h1>{ this.props.hotspotTotal }</h1>
        <h1>{ this.props.broadTotal }</h1>
      </div>
    );
  }
}
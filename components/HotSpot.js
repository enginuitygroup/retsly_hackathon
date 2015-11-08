import React from "react";
import { Action, connect } from "griffin.js";

import RetslyHotspotQuery from "../actions/RetslyHotspotQuery";
import RetslyHotspotBroadQuery from "../actions/RetslyHotspotBroadQuery";

import RetslyHotspotStore from "../stores/RetslyHotspotStore";

@connect({hotspotTotal: RetslyHotspotStore})
@connect({broadTotal: RetslyHotspotStore})

export default class HotZone extends React.Component {
  componentDidMount() {
    new RetslyHotspotQuery(this.props.address);
    new RetslyHotspotBroadQuery(this.props.address);
  }

  transactionsAreaRatio() {
    const hotSpotArea = 3.141592653589793;
    const broadArea = 78.53981633974483;

    return({
      hotspotRatio: this.props.hotspotTotal / hotSpotArea,
      broadRatio: this.props.broadTotal / broadArea
    });
  }

  generateHotspotText() {
    let ratios = this.transactionsAreaRatio();
    let ratio = ratios.broadRatio / ratios.hotspotRatio;

    if(ratio == 1) {
      return "about as active as";
    } else if(ratio > 1) {
      return "less active than";
    } else {
      return "more active than";
    }
  }

  renderHotspotContent() {
    if(this.props.broadTotal && this.props.hotspotTotal) {
      return(
        <div id="hotspot">
          <h1>For the last year...</h1>
          <h1>the area around this property has been <span className="hotspot-description">{ this.generateHotspotText() }</span> the larger area.</h1>
        </div>
      );
    }
  }

  render() {
    let ratios = this.transactionsAreaRatio();

    return(
      <div id="hotspot">
        { this.renderHotspotContent() }
      </div>
    );
  }
}
import React from "react";
// import HoodQBounds from "../actions/HoodQBounds";
import RetslyListingData from "../actions/RetslyListingData"

import {connect} from "griffin.js";

import RetslyListingStore from "../stores/RetslyListingStore";

@connect({listing: RetslyListingStore})

export default class Listing extends React.Component {
  componentDidMount() {
    let listingId = "1af422efd678be825400649d55a89203";

    new RetslyListingData(listingId);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <h1>Listing DATA!!!</h1>
        </div>

        <div className="col-xs-9">
          <p>
            MORE Data
          </p>

          <p>
            {this.props.listing}
          </p>
        </div>
      </div>
    )
  }
}

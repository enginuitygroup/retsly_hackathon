import React from "react";

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
    console.log(this.props.listing)
    return (
      <div className="row">
        <div className="col-xs-12">
          <h1>Listing DATA!!!</h1>
          
          <p>
            Listing Data goes here!
          </p>
        </div>
      </div>
    )
  }
}

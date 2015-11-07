import React from "react";

import RetslyListingData from "../actions/RetslyListingData"

import {connect} from "griffin.js";

import RetslyListingStore from "../stores/RetslyListingStore";

@connect({listing: RetslyListingStore})

export default class Listing extends React.Component {
  componentDidMount() {
    let listingId = "1af422efd678be825400649d55a89203";

    this.mls_data = null

    new RetslyListingData(listingId);
  }

  render() {
    let listing_data = this.props.listing;

debugger;

    if(listing_data) {
      this.mls_data = (
        <div className="row">
          <div className="col-xs-12">
            <h1>{listing_data.address}</h1>

            <img src={listing_data.media[0].url} />

            <p>
              Bedrooms: {listing_data.bedrooms}
              <br/>
              Baths: {listing_data.baths}
              <br/>
              Garage: {listing_data.garageSpaces}
              <br/>
              Type: {listing_data.type}
              <br/>
              Desc: {listing_data.publicRemarks}
              <br/>
              Price: {listing_data.price}
              <br/>
              Size: {listing_data.squareFootage}
            </p>
          </div>
        </div>
      )
    }

    return (
      <div>
        {this.mls_data}
      </div>
    )
  }
}

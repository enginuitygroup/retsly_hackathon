import React from "react";

import RetslyListingData from "../actions/RetslyListingData"

import {connect} from "griffin.js";

import RetslyListingStore from "../stores/RetslyListingStore";

import BedroomSvg from "../images/HoodQ_Icon_Bedrooms.svg";
import BathroomSvg from "../images/HoodQ_Icon_Bathrooms.svg"
import GarageSvg from "../images/HoodQ_Icon_Garage.svg"

import "../styles/Retsly.less"

@connect({listing: RetslyListingStore})

export default class Listing extends React.Component {
  componentDidMount() {
    let listingId = "1af422efd678be825400649d55a89203";

    this.mls_data = null

    new RetslyListingData(listingId);
  }

  render() {
    let listing_data = this.props.listing;

    if(this.props.listing) {
      listing_data = this.props.listing;

      let price = `$${listing_data.price}`
      let size = `${listing_data.squareFootage} SqFt`
      let sub_address = `${listing_data.type} Prime ${listing_data.city} home`

      this.mls_data = (
        <div className="row">
          <div className="col-xs-12">
            <h1>{listing_data.address}</h1>
            <h2>{sub_address}</h2>
            
            <p>
              Price: {price}
            </p>
            
            <img src={listing_data.media[0].url} />

            <p>
              Desc: {listing_data.publicRemarks}
            </p>

            <div className="svg-icon">
              <p>
                {listing_data.bedrooms}
              </p>
                {BedroomSvg}
            </div>
            <div className="svg-icon">
              {listing_data.baths}
              {BathroomSvg}
            </div>
            <div className="svg-icon">
              {listing_data.garageSpaces}
              {GarageSvg}
            </div>

            <p>
              Size: {size}
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

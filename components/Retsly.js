import React from "react";

import RetslyListingData from "../actions/RetslyListingData"

import {connect} from "griffin.js";

import RetslyListingStore from "../stores/RetslyListingStore";

import BedroomSvg from "../images/HoodQ_Icon_Bedrooms.svg";
import BathroomSvg from "../images/HoodQ_Icon_Bathrooms.svg"
import GarageSvg from "../images/HoodQ_Icon_Garage.svg"
import PinSvg from "../images/HoodQ_Icon_HoodQHomePinShd.svg"

import "../styles/Retsly.less"

@connect({listing: RetslyListingStore})
export default class Listing extends React.Component {
  componentDidMount() {
    // TODO pass in listing Id from Map
    let listingId = "0b1b67c27c8fd8996088fdd97db4d1c5";

    this.mls_data = null

    new RetslyListingData(listingId);
  }

  render() {
    let listing_data = this.props.listing;

    if(this.props.listing) {
      listing_data = this.props.listing;

      let price = `$${listing_data.price.toLocaleString()}`
      let size = `${listing_data.squareFootage} SqFt`
      let sub_address = `${listing_data.type} Prime ${listing_data.city} Home`

      this.mls_data = (
        <div className="listing-wrapper">
          <div className="row">
            <div className="col-xs-1">
              {PinSvg}
            </div>
            <div className="col-xs-8">
              <h1>{listing_data.address}</h1>
              <h2>{sub_address}</h2>
            </div>

            <div className="col-xs-3 corner-info">
              <p>
                {price}
              <br/>
                {size}
              </p>
            </div>
          </div>

              <img src={listing_data.media[0].url} />
              <hr/>

          <div className="row">
            <div className="icon-caption col-xs-1">
              {listing_data.bedrooms}
            </div>
            <div className="svg-icon col-xs-2">
              {BedroomSvg}
            </div>

            <div className="icon-caption col-xs-1">
              {listing_data.baths}
            </div>
            <div className="svg-icon col-xs-2">
              {BathroomSvg}
            </div>

            <div className="icon-caption col-xs-1">
              {listing_data.garageSpaces}
            </div>
            <div className="svg-icon col-xs-2">
              {GarageSvg}
            </div>
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

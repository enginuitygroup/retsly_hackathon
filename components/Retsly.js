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
    let listingID = this.props.listingID

    this.mls_data = null

    new RetslyListingData(listingID);
  }

  render() {
    let listing_data = this.props.listing;

    if(this.props.listing) {
      listing_data = this.props.listing;

      let price = `$${listing_data.price.toLocaleString()}`
      let size = `${listing_data.squareFootage} sqft`
      let description = `${listing_data.type} Prime ${listing_data.city} Home`

      this.mls_data = (
        <div className="listing-wrapper">
          <div className="row">
            <div className="col-xs-1">
              {PinSvg}
            </div>
            <div className="col-xs-8">
              <h1>{listing_data.address}</h1>
              <h2>{description}</h2>
            </div>
          </div>


          <div className="row icon-stuff">
            <div className="col-xs-1">
            </div>
            <div className ="col-xs-2">
              <h3>
                {price}
              </h3>
              <h3>
                {size}
              </h3>
            </div>
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

          <img src={listing_data.media[0].url} />
          <hr/>

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

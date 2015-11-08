import React from "react";

import Demographics from "./listing/Demographics";

import {Action} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch";

import {connect} from "griffin.js";
import SearchStore from "../stores/SearchStore";
import PackageStore from "../stores/PackageStore";

import Retsly from "./Retsly";
import HotSpot from "./HotSpot";
import DogIcon from "./listing/DogIcon";
import FamilyIcon from "./listing/FamilyIcon";

import "../styles/Listing.less";

@connect({places: SearchStore})
@connect({package: PackageStore})

export default class Listing extends React.Component {
  componentDidMount() {
    let address = this.props.location.query.address;
    new HoodQSearch(address);
  }

  findDemographics() {
    if(this.props.places) {
      return this.props.places.find(function(place){
        return place.place_category_key === "demographics";
      });
    }
  }

  renderDogOwnership() {
    let rawDemographics = this.findDemographics();

    if(rawDemographics) {
      return(
        <div>
          <h2 className="dog-stats">
            { rawDemographics.features["Household Percentage With Dogs"] }<span className="tiny">%</span>
          </h2>
          <div className="row">
            <div className="col-xs-6">
              <p>of households in the area are dog people.</p>
            </div>
            <div className="col-xs-6">
              <DogIcon />
            </div>
          </div>
        </div>
      )
    };
  }

  renderDemographics() {
    let rawDemographics = this.findDemographics();

    if(rawDemographics) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-2">
              <FamilyIcon />
            </div>
            <div className="col-xs-10">
              <h2>Dominant Demographic:</h2>
              <h2 className="demographic-name">"{ rawDemographics.features["Dominant Tapestry Name"] }"</h2>
            </div>
          </div>
          <p>{ rawDemographics.features["Dominant Tapestry Description"] }</p>
        </div>
      )
    };
  }

  renderPackage() {
    if(this.props.package) {
      let packageUrl = `https://staging-reports.hoodq.com/package/${ this.props.package.id }`;

      return(
        <iframe width="100%" height="1400" src={ packageUrl } />
      )
    }
  }

  render() {
    return (
      <div className="listing">
        <Retsly
          listingID={this.props.location.query.listingID}
        />
        <HotSpot />

        <hr />
        <div className="demographics-content">
          <div className="row">
            <div className="col-xs-8">
              { this.renderDemographics() }
            </div>

            <div className="col-xs-3 col-xs-offset-1">
              { this.renderDogOwnership() }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            { this.renderPackage() }
          </div>
        </div>
      </div>
    )
  }
}

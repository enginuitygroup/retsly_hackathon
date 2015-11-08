import React from "react";
import Demographics from "./listing/Demographics";


import {Action} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch";

import {connect} from "griffin.js";
import SearchStore from "../stores/SearchStore";
import PackageStore from "../stores/PackageStore";

import "../styles/Listing.less";

@connect({places: SearchStore})
@connect({package: PackageStore})

export default class Listing extends React.Component {
  componentDidMount() {
    new HoodQSearch("12 Main St, Butte MT");
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
          <h2 className="dog-stats">{ rawDemographics.features["Household Percentage With Dogs"] }%</h2>
          <p>of households in the area are dog people.</p>
        </div>
      )
    };
  }

  renderDemographics() {
    let rawDemographics = this.findDemographics();

    if(rawDemographics) {
      return(
        <div>
          <h2>Dominant Demographic: { rawDemographics.features["Dominant Tapestry Name"] }</h2>
          <p>{ rawDemographics.features["Dominant Tapestry Description"] }</p>
        </div>
      )
    };
  }

  renderPackage() {
    if(this.props.package) {
      let packageUrl = `https://beta.hoodq.com/package/${ this.props.package.package_id }/standard_coverage`

      return(
        <iframe width="100%" height="1200" src= { packageUrl } />
      )
    }
  }

  render() {
    return (
      <div className="listing">
        <div className="row">
          <div className="col-xs-12">
            <h1>Address!</h1>
            <h3>Listing Stuff!</h3>
          </div>

          <div className="col-xs-9">
            { this.renderDemographics() }
          </div>

          <div className="col-xs-3">
            { this.renderDogOwnership() }
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



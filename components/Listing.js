import React from "react";
import Demographics from "./listing/Demographics";


import {Action} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch";

import {connect} from "griffin.js";
import SearchStore from "../stores/SearchStore";

@connect({places: SearchStore})
export default class Listing extends React.Component {
  componentDidMount() {
    new HoodQSearch("1 Main St, Hawaii");
  }

  renderPlaces() {
    if(this.props.places) {
      return this.props.places.map(function(place) {
        return <p>{place.name}</p>
      })
    }
  }

  renderDemographics() {
    if(this.props.places) {
      let tapestry = this.props.places.find(function(place){
        return place.place_category_key === "demographics";
      });

      if(tapestry) { return(
        // <h2>{ tapestry.features["Dominant Tapestry Name"] }</h2>)
        <p>{ tapestry.features["Dominant Tapestry Description"] }</p>)
      };
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h1>Address!</h1>
          <h3>Picture!</h3>
          <h3>Reports!</h3>

          <p>
            Demographics
          </p>

          <div>
            {this.renderDemographics() }
          </div>

          <div>
            { this.renderPlaces() }
          </div>
        </div>
      </div>
    )
  }
}



import React from "react";
import {Action} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch"

import {connect} from "griffin.js";
import SearchStore from "../stores/SearchStore";

@connect({places: SearchStore})
export default class Listing extends React.Component {
  componentDidMount() {
    new HoodQSearch("1 Main St, Hawaii");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <h1>Look!</h1>
        </div>

        <div className="col-xs-9">
          <p>
            Places!
          </p>

          <p>
            {this.props.places}
          </p>
        </div>
      </div>
    )
  }
}



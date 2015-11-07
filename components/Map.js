import React from "react";
import HoodQBounds from "../actions/HoodQBounds";

import {connect} from "griffin.js";

import BoundsStore from "../stores/BoundsStore";

@connect({places: BoundsStore})
export default class Map extends React.Component {
  componentDidMount() {
    new HoodQBounds();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <h1>Options!!!</h1>
        </div>

        <div className="col-xs-9">
          <p>
            Map!!!!!!!!!
          </p>

          <p>
            {this.props.places}
          </p>
        </div>
      </div>
    )
  }
}

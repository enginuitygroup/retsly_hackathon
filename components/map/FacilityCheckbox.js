import React from "react";

import SelectFacilityType from "../../actions/SelectFacilityType";
import DeselectFacilityType from "../../actions/DeselectFacilityType";

import FacilityTypesStore from "../../stores/FacilityTypesStore";

import {connect} from "griffin.js";

@connect({displayedFacilityTypes: FacilityTypesStore})
export default class FacilityCheckbox extends React.Component {
  handleChange(event) {
    let checked = event.target.checked;

    if(checked) {
      new SelectFacilityType(this.props.facility);
    }
    else {
      new DeselectFacilityType(this.props.facility);
    }
  }

  render() {
    return (
      <p>
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange.bind(this)}
          />

          {this.props.facility}
        </label>
      </p>
    );
  }
}

import React from "react";
import HoodQBounds from "../actions/HoodQBounds";
import FacilityCheckbox from "./map/FacilityCheckbox";

import {connect} from "griffin.js";

import BoundsStore from "../stores/BoundsStore";
import FacilityTypesStore from "../stores/FacilityTypesStore";

import "../styles/Map.less";

const sanFranLatLng = L.latLng(37.773972, -122.431297);

@connect({places: BoundsStore, displayedFacilityTypes: FacilityTypesStore})
export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
  }

  componentDidMount() {
    let map = L.mapbox.map(this.refs.map, "tazsingh.ike094ed"
    , {
      center: sanFranLatLng
    , zoom: 16
    , minZoom: 14
    });

    let mapBounds = map.getBounds();

    new HoodQBounds(mapBounds.getNorthWest(), mapBounds.getSouthEast());

    this.setState({
      map
    });
  }

  render() {
    let facilityTypes = [];

    if(this.props.places && this.props.places.length > 0 && this.state.map) {
      this.props.places.forEach((place) => {
        if(place.place_category_key === "parks") {
          let facilities = place.features.Facilities;

          facilities.forEach((facility) => {
            if(!facilityTypes.includes(facility)) {
              facilityTypes.push(facility);
            }
          })

          L.geoJson(JSON.parse(place.geom), {

          }).addTo(this.state.map);
        }
      });
    }

    let facilities = facilityTypes.map((facility) => {
      return (
        <FacilityCheckbox
          facility={facility}
        />
      );
    });

    return (
      <div className="row hq-map">
        <div className="col-xs-3">
          <h1>Options!!!</h1>

          {facilities}
        </div>

        <div className="col-xs-9 map-container">
          <div ref="map">
          </div>
        </div>
      </div>
    )
  }
}

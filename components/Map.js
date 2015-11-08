import React from "react";
import HoodQBounds from "../actions/HoodQBounds";
import FacilityCheckbox from "./map/FacilityCheckbox";

import {connect} from "griffin.js";
import turf from "turf";

import BoundsStore from "../stores/BoundsStore";
import FacilityTypesStore from "../stores/FacilityTypesStore";
import RetslyListingBoxStore from "../stores/RetslyListingBoxStore";

import Map from "./mapbox/Map";
import Place from "./mapbox/Place";
import HeatLayer from "./mapbox/HeatLayer";

import history from "../history";

import "../styles/Map.less";

const sanFranLatLng = L.latLng(37.75697456047672, -122.43288516998291);

@connect({
  places: BoundsStore
, displayedFacilityTypes: FacilityTypesStore
, listings: RetslyListingBoxStore
})
export default class MapComponent extends React.Component {
  handlePlaceClick(event) {
    history.pushState(
      null
    , `/listing?address=${encodeURIComponent(event.place.address)}&listingID=${encodeURIComponent(event.place.id)}`
    );
  }

  render() {
    let facilityTypes = [];
    let mapPlaces = [];
    let heatData = [];

    if(this.props.listings && this.props.listings.length > 0) {
      this.props.listings.forEach((listing) => {

        listing.geom = `{"type":"Point","coordinates":[${listing.coordinates[0]},${listing.coordinates[1]}]}`;

        mapPlaces.push(
          <Place
            place={listing}
            onClick={this.handlePlaceClick.bind(this)}
          />
        );
      });
    }

    if(this.props.places && this.props.places.length > 0) {
      this.props.places.forEach((place) => {
        if(place.place_category_key === "parks") {
          let facilities = place.features.Facilities;
          let anyFacilityDisplayed = false;

          facilities.forEach((facility) => {
            if(!facilityTypes.includes(facility)) {
              facilityTypes.push(facility);
            }

            if(this.props.displayedFacilityTypes.includes(facility)) {
              anyFacilityDisplayed = true;

              let parsedGeom = JSON.parse(place.geom);

              if(parsedGeom.type === "Point") {
                heatData.push([parsedGeom.coordinates[1], parsedGeom.coordinates[0], 0.5]);
              }
              else {
                let centroid = turf.centroid(parsedGeom).geometry;

                heatData.push([centroid.coordinates[1], centroid.coordinates[0], 0.5]);
              }
            }
          });

          if(anyFacilityDisplayed) {
            mapPlaces.push(
              <Place
                place={place}
              />
            );
          }
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

    let heatLayer = [];

    if(heatData.length > 0) {
      heatLayer = (
        <HeatLayer
          heatData={heatData}
        />
      );
    }

    return (
      <div className="row hq-map">
        <div className="col-xs-3 your-interests">
          <h1>Your Interests</h1>

          {facilities}

          <h1>Listing Filters</h1>

          <p>
            <label>
              Beds:

              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Baths:

              <select>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5+</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Price Range:

              <select>
                <option>0-100,000</option>
                <option>100,000-200,000</option>
                <option>200,000-300,000</option>
                <option>300,000-400,000</option>
                <option>400,000-500,000</option>
                <option>500,000+</option>
              </select>
            </label>
          </p>
        </div>

        <div className="col-xs-9 map-container">
          <Map
            center={sanFranLatLng}
            zoom={16}
            minZoom={16}
            maxZoom={16}
          >
            {mapPlaces}

            {heatLayer}
          </Map>
        </div>
      </div>
    )
  }
}

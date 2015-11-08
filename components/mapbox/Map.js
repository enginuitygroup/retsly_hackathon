import React from "react";
import HoodQBounds from "../../actions/HoodQBounds";
import RetslyListingsByBox from "../../actions/RetslyListingsByBox"

import debounce from "lodash/function/debounce";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    }
  }

  componentDidMount() {
    let map = L.mapbox.map(this.refs.map, "tazsingh.ike094ed"
    , {
      center: this.props.center
    , zoom: this.props.zoom
    , minZoom: this.props.minZoom
    , maxZoom: this.props.maxZoom
    });

    map.on("move", debounce(this.handleMove.bind(this), 500));

    // call this.handleMove to initially grab places by bounds
    this.setState({map}, this.handleMove.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    //if(nextProps.zoom) {
    //  this.state.map.setZoom(nextProps.zoom);
    //}
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  handleMove(event) {
    let mapBounds = this.state.map.getBounds();
    let northWest = mapBounds.getNorthWest();
    let southEast = mapBounds.getSouthEast();

    new HoodQBounds(northWest, southEast);
    new RetslyListingsByBox(northWest, southEast);
  }

  render() {
    let children = [];

    if(this.props.children) {
      let index = 0;

      children = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
          map: this.state.map
        });
      });
    }

    return (
      <div ref="map">
        {children}
      </div>
    )
  }
}

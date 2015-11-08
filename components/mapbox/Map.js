import React from "react";
import HoodQBounds from "../../actions/HoodQBounds";

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
    , zoomControl: false
    , attributionControl: false
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
    if(this.props.handleMove) {
      this.props.handleMove(this.state.map);
    }
  }

  render() {
    let children = [];

    if(this.props.children) {
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

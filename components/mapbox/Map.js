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

  handleMove(event) {
    console.log("HANDLE MOVE", event);

    let mapBounds = this.state.map.getBounds();

    new HoodQBounds(mapBounds.getNorthWest(), mapBounds.getSouthEast());
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

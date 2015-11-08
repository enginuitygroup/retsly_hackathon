import React from "react";

const contour = "#000";

export default class HeatLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heatLayer: null
    , map: props.map
    };
  }

  componentDidMount() {
    let heatLayer = this.createHeatLayer(this.props.heatData);

    this.setState({heatLayer});

    if(this.state.map) {
      heatLayer.addTo(this.state.map);
    }
  }

  componentWillUnmount() {
    if(this.state.map && this.state.heatLayer) {
      this.state.map.removeLayer(this.state.heatLayer);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.map && nextProps.map !== this.state.map) {
      this.setState({
        map: nextProps.map
      });

      if(this.state.heatLayer) {
        this.state.heatLayer.addTo(nextProps.map);
      }
    }

    if(
      nextProps.heatData
      && nextProps.heatData !== this.props.heatData
      && this.state.heatLayer
      && nextProps.map
    ) {
      nextProps.map.removeLayer(this.state.heatLayer);

      let heatLayer = this.createHeatLayer(this.props.heatData);

      this.setState({heatLayer});

      heatLayer.addTo(nextProps.map);
    }
  }

  createHeatLayer(data) {
    return L.heatLayer(data, {
      radius: 250
    , blur: 140
    , gradient: {
      //  0: contour
      //, 0.1: "#ffeda0"
      //, 0.2: "#ffeda0"
      //, 0.21: contour
      //, 0.22: "#ffeda0"
      //, 0.4: "#ffeda0"
      //, 0.41: contour
      //, 0.42: "#ffeda0"
      //, 0.6: "#feb24c"
      //, 0.61: contour
      //, 0.62: "#feb24c"
      //, 0.8: "#feb24c"
      //, 0.81: contour
      //, 0.82: "#feb24c"
      //, 0.988: "#f03b20"
      //, 0.989: contour
      //, 0.90: "#f03b20"
      //, 0.97: "#f00"
      //, 0.98: contour
      //, 0.99: "#f00"
      //, 1: "#f00"
        0: "#F0533F"
      , 0.33: "#6A6BB1"
      , 0.66: "#01808C"
      , 1: "#54C6D5"
      }
    });
  }

  render() {
    return null;
  }
}

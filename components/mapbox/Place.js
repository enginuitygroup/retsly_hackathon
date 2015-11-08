import React from "react";

export default class Place extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geoJson: null
    , map: props.map
    };
  }

  componentDidMount() {
    let geoJson = L.geoJson(JSON.parse(this.props.place.geom));

    this.setState({geoJson});

    geoJson.addTo(this.state.map);
  }

  componentWillUnmount() {
    if(this.state.map && this.state.geoJson) {
      this.state.map.removeLayer(this.state.geoJson);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.map && nextProps.map !== this.state.map) {
      this.setState({
        map: nextProps.map
      });

      if(this.state.geoJson) {
        this.state.geoJson.addTo(nextProps.map);
      }
    }

    if(
      nextProps.place
      && nextProps.place !== this.props.place
      && this.state.geoJson
      && nextProps.map
    ) {
      nextProps.map.removeLayer(this.state.geoJson);

      let geoJson = L.geoJson(JSON.parse(nextProps.place.geom));

      this.setState({geoJson});

      geoJson.addTo(nextProps.map);
    }
  }

  render() {
    return null;
  }
}

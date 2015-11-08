import React from "react";

export default class Place extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geoJson: null
    , map: props.map
    , onClick: null
    };
  }

  componentDidMount() {
    let geoJson = this.createGeoJson.bind(this)(this.props.place);

    this.setState({geoJson});

    if(this.state.map) {
      geoJson.addTo(this.state.map);
    }
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

      let geoJson = this.createGeoJson.bind(this)(nextProps.place);

      this.setState({geoJson});

      geoJson.addTo(nextProps.map);
    }
  }

  createGeoJson(place) {
    let geoJson = L.geoJson(JSON.parse(place.geom))

    geoJson.on("click", this.handleClick.bind(this));

    return geoJson;
  }

  handleClick(event) {
    if(this.props.onClick) {
      event.place = this.props.place;
      this.props.onClick(event);
    }
  }

  render() {
    return null;
  }
}

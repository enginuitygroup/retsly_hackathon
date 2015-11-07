import React from "react";

export default class Demographics extends React.Component {
  render() {
    return(
      <div>
        <h2>{ this.props.demographics["Dominant Tapestry Name"] }</h2>
        <p>{ this.props.demographics["Dominant Tapestry Description"] }</p>
      </div>
    )
  };
}
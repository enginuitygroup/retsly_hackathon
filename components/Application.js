import React from "react";

import {Link} from "react-router";

export default class Application extends React.Component {
  render() {
    if(this.props.children) {
      return this.props.children;
    }

    return (
      <div>
        <h1>It works!!!</h1>

        <Link to="/map">Go to Map!</Link>
      </div>
    )
  }
}

import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class HoodQBounds extends Action {
  constructor(northWest, southEast) {
    super();

    let params = `auth_token=${process.env.HOODQ_TOKEN}&north_west=${northWest.lat},${northWest.lng}&south_east=${southEast.lat},${southEast.lng}`;
    fetch(`https://platform.hoodq.com/places/bounds?${params}`).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((places) => {
      this.places = places;

      this.dispatch();
    });
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class HoodQBounds extends Action {
  constructor(northwest, southeast) {
    super();

    let params = `auth_token=${process.env.HOODQ_TOKEN}&northwest=${northwest}&southeast={southeast}`
    fetch(`https://platform.hoodq.com/places/bounds?${params}`).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    this.places = "some places!!!!";

    this.dispatch();
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

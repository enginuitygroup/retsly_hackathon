import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class HoodQSearch extends Action {
  constructor(address) {
    super();

    let params = `auth_token=${process.env.HOODQ_TOKEN}&search[address]=${address}&format=json`

    fetch(`https://staging-platform.hoodq.com/searches.json?${params}`, {method: "PUT"}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      this.places = actualBody.search.places;

      this.dispatch();
    })
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

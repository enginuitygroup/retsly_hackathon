import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class HoodQPackage extends Action {
  constructor(address) {
    super();

    let params = `auth_token=${process.env.HOODQ_TOKEN}&package[address]=${encodeURIComponent(address)}&format=json`

    fetch(`https://platform.hoodq.com/packages.json?${params}`, {method: "PUT"}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      this.package = actualBody.package;

      this.dispatch();
    })
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

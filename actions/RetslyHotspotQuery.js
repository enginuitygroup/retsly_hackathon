import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class RetslyHotspotQuery extends Action {
  constructor() {
    super();

    let oldestDate = "2014-11";

    let params = `access_token=${process.env.RETSLY_TOKEN}&radius=1km&gt=${oldestDate}`;
    fetch(`https://rets.io/api/v1/test_sf/transactions/?${params}`, {cors: true}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      debugger;
      this.total = actualBody.total;

      this.dispatch();
    });
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

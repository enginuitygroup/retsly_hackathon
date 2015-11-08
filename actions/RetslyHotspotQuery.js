import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

import Moment from "moment";

export default class RetslyHotspotQuery extends Action {
  constructor() {
    super();

    let oldestDate = Moment().subtract(1, "year").format();

    let params = `access_token=${process.env.RETSLY_TOKEN}&radius=1km&documentDate.gt=${oldestDate}`;
    fetch(`https://rets.io/api/v1/test_sf/transactions/?${params}`, {cors: true}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      this.total = actualBody.total;

      this.dispatch();
    });
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

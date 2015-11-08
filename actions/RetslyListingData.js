import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class RetslyListingData extends Action {
  constructor(listingId) {
    super();

    let params = `access_token=${process.env.RETSLY_TOKEN}`;

    fetch(`https://rets.io/api/v1/test_sf/listings/${listingId}?${params}`, {cors: true}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      this.listing = actualBody.bundle;

      this.dispatch();
    });
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

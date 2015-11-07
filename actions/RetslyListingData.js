import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class RetslyListingData extends Action {
  constructor(listingId) {
    super();
debugger;
    let params = `auth_token=${process.env.RETSLY_TOKEN}&address=${listingId}&limit=1`;
    fetch(`https://rets.ly/api/v1/armls/listings?${params}`).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    this.listing = "Listing DATA!!!!!!!!";

    this.dispatch();
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class RetslyListingData extends Action {
  constructor(listingId, filters) {
    super();

    let params = `access_token=${process.env.RETSLY_TOKEN}`;

    if(filters) {
      if(filters.beds) {
        let beds = `&bedrooms=${filters.beds}`;
        params.concat(beds);
      }
      if(filters.baths) {
        let baths = `&baths=${filters.baths}`;
        params.concat(baths);
      }
      if(filters.price) {
        let price = `&price[gt]${filter.price.slice(0, -1)}`;
        params.concat(price)
      }
    }

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

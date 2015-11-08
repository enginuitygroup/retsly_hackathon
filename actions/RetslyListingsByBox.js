import fetch from "isomorphic-fetch";
import {Action} from "griffin.js";

export default class RetslyListingData extends Action {
  constructor(northWest, southEast, filteringOptions) {
    super();

    let params = `?access_token=${process.env.RETSLY_TOKEN}&limit=50&sortBy=price`;
    let bbox = `&box=${northWest.lng},${northWest.lat},${southEast.lng},${southEast.lat}`;

    params += bbox;

    if(filteringOptions) {
      if(filteringOptions.beds) {
        let beds = `&bedrooms[gte]=${filteringOptions.beds}`;
        params += beds;
      }
      if(filteringOptions.baths) {
        let baths = `&baths[gte]=${filteringOptions.baths}`;
        params += baths;
      }
      if(filteringOptions.price) {
        let price = `&price[gte]${filteringOptions.price}`;
        params += price;
      }
    }

    fetch(`https://rets.io/api/v1/test_sf/listings${params}`, {cors: true}).then(
      this.handleSuccess.bind(this)
    , this.handleFailure.bind(this)
    );
  }

  handleSuccess(response) {
    response.json().then((actualBody) => {
      this.listings = actualBody.bundle;

      this.dispatch();
    });
  }

  handleFailure(response) {
    // TODO: handle failure
  }
}

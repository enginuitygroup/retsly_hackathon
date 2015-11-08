import {Store} from "griffin.js";

import RetslyListingData from "../actions/RetslyListingData";
import RetslyListingsByBox from "../actions/RetslyListingsByBox";

export default new class RetslyListingStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case RetslyListingData:
        return action.listing;
      case RetslyListingsByBox:
        return action.listings;
      default:
        return state;
    }
  }
}

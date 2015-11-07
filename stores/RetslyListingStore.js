import {Store} from "griffin.js";

import RetslyListingData from "../actions/RetslyListingData";

export default new class RetslyListingStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case HoodQBounds:
        return action.listing;
      default:
        return state;
    }
  }
}

import {Store} from "griffin.js";

import RetslyListingsByBox from "../actions/RetslyListingsByBox";

export default new class RetslyListingStore extends Store {
  reducer(state = [], action) {
    switch(action.constructor) {
      case RetslyListingsByBox:
        return action.listings;
      default:
        return state;
    }
  }
}

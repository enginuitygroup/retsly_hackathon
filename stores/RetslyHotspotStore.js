import {Store} from "griffin.js";

import RetslyHotspotQuery from "../actions/RetslyHotspotQuery";

export default new class RetslyHotspotStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case RetslyHotspotQuery:
        return action.total;
      default:
        return state;
    }
  }
}

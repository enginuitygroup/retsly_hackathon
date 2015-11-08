import {Store} from "griffin.js";

import RetslyHotspotQuery from "../actions/RetslyHotspotQuery";
import RetslyHotspotBroadQuery from "../actions/RetslyHotspotBroadQuery";

export default new class RetslyHotspotStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case RetslyHotspotQuery:
        return action.hotspotTotal;
      case RetslyHotspotBroadQuery:
        return action.broadTotal;
      default:
        return state;
    }
  }
}

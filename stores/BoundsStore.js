import {Store} from "griffin.js";

import HoodQBounds from "../actions/HoodQBounds";

export default new class BoundsStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case HoodQBounds:
        return action.places;
      default:
        return state;
    }
  }
}

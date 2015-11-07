import {Store} from "griffin.js";

import HoodQBounds from "../actions/HoodQBounds";

export default new class BoundsStore extends Store {
  reducer(state = [], action) {
    switch(action.constructor) {
      case HoodQBounds:
        return action.places.places;
      default:
        return state;
    }
  }
}

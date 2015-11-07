import {Store} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch";

export default new class SearchStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case HoodQSearch:
      debugger;
        return action.places;
      default:
        return state;
    }
  }
}

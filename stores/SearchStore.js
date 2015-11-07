import {Store} from "griffin.js";

import HoodQSearch from "../actions/HoodQSearch";

export default new class SearchStore extends Store {
  reducer(state = [], action) {
    switch(action.constructor) {
      case HoodQSearch:
        return action.places;
      default:
        return state;
    }
  }
}

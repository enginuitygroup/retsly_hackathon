import {Store} from "griffin.js";

import HoodQPackage from "../actions/HoodQPackage";

export default new class SearchStore extends Store {
  reducer(state = null, action) {
    switch(action.constructor) {
      case HoodQPackage:
        return action.package;
      default:
        return state;
    }
  }
}

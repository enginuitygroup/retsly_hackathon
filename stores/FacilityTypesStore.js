import {Store} from "griffin.js";

import SelectFacilityType from "../actions/SelectFacilityType";
import DeselectFacilityType from "../actions/DeselectFacilityType";

export default new class FacilityTypesStore extends Store {
  reducer(state = [], action) {
    switch(action.constructor) {
      case SelectFacilityType:
        if(state.includes(action.facilityType)) {
          return state;
        }
        else {
          return [action.facilityType, ...state];
        }
      case DeselectFacilityType:
        if(state.includes(action.facilityType)) {
          return state.reduce((memo, facilityType) => {
              if(facilityType == action.facilityType) {
                return memo;
              }
              else {
                memo.push(facilityType);

                return memo;
              }
            }
          , []);
        }
        else {
          return state;
        }
      default:
        return state;
    }
  }
}

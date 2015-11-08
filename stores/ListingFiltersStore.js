import {Store} from "griffin.js";

export default new class ListingFiltersStore extends Store {
  reducer(state = {beds: null, baths: null, priceRange: null}, action) {
    switch(action.constructor) {
      default:
        return state;
    }
  }
}

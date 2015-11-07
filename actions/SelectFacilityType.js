import {Action} from "griffin.js";

export default class SelectFacilityType extends Action {
  constructor(facilityType) {
    super();

    this.facilityType = facilityType;

    this.dispatch();
  }
}

import {Action} from "griffin.js";

export default class DeselectFacilityType extends Action {
  constructor(facilityType) {
    super();

    this.facilityType = facilityType;

    this.dispatch();
  }
}

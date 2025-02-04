import {BusinessArray} from "./index.types";

export function getBusinessLocations(businesses: BusinessArray): Array<{ coordinates: [number, number], type: string }> {
  return businesses.map((business) => business.location);
}
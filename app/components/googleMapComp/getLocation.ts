import {BusinessArray} from "./index.types"; // Assuming you have a types file

export function getBusinessLocations(businesses: BusinessArray): Array<{ coordinates: [number, number], type: string }> {
  return businesses.map((business) => business.location);
}
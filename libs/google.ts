"use server";

import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();
export const autocomplete = async (input: string) => {
  if (!input) return [];

  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key:"AIzaSyCxQwyVPobLvtCQ5T0lEnBM4203mqODvSk",
      },
    });

    return response.data.predictions;
  } catch (error) {
    console.error(error);
  }
};



// Function to fetch place details using placeId
export const getPlaceDetails = async (placeId: string) => {
  try {
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        key: "AIzaSyCxQwyVPobLvtCQ5T0lEnBM4203mqODvSk", // Replace with your Google Maps API key
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

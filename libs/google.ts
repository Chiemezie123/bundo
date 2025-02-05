"use server";

import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

export const autocomplete = async (input: string) => {
  if (!input) return [];

  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key:process.env.GOOGLE_MAPS_API_KEY || "",
      },
    });

    return response.data.predictions;
  } catch (error) {
    console.error(error);
  }
};



export const getPlaceDetails = async (placeId: string) => {
  try {
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        key: process.env.GOOGLE_MAPS_API_KEY || "",
      },
    });

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

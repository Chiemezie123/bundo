'use client'

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Define the map container styles
const mapContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "678px",
  borderRadius: "20px",
};

// Define the default center of the map
const center: google.maps.LatLngLiteral = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude (San Francisco)
};

// Define the GoogleMapComponent
const GoogleMapComponent: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", 
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10} // Default zoom level
      center={center}
    >
      {/* Add a marker if needed */}
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
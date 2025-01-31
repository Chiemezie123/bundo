'use client';

import React, { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { BusinessArray } from "./index.types";
import { getBusinessLocations } from "./getLocation";

interface BusinessListProps {
  businesses: BusinessArray; // Array of Business objects
}

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

// Move libraries outside the component to avoid re-renders
const libraries: ("places" | "marker")[] = ["marker"];

// Define the GoogleMapComponent
const GoogleMapComponent: React.FC<BusinessListProps> = ({ businesses }) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const locations = getBusinessLocations(businesses);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCxQwyVPobLvtCQ5T0lEnBM4203mqODvSk", // Replace with your API key
    libraries,
  });

  useEffect(() => {
    if (!isLoaded || !google?.maps?.marker?.AdvancedMarkerElement) {
      console.error("Google Maps API not fully loaded or AdvancedMarkerElement is missing.");
      return;
    }

    if (mapRef.current) {
      // Clear existing markers
      markersRef.current.forEach((marker) => (marker.map = null));
      markersRef.current = [];

      // Define custom icon for markers
      const icon = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", // Replace with your icon URL
        size: new google.maps.Size(20, 32), // Icon size
        origin: new google.maps.Point(0, 0), // Icon origin
        anchor: new google.maps.Point(0, 32), // Icon anchor
      };

      // Define custom shape for markers
      const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1], // Define the clickable region
        type: "poly", // Shape type
      };

      // Create new markers
      locations.forEach((location, index) => {
        const content = document.createElement("div");
        content.innerHTML = `
          <img
            src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            alt="Marker Icon"
            style="width: 20px; height: 32px;"
          />
        `;
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: {
            lat: location.coordinates[1], // Latitude
            lng: location.coordinates[0], // Longitude
          },
          title: `Business Location ${index + 1}`, // Optional: Add a title
          gmpClickable: true, // Make the marker clickable
          gmpDraggable: false, // Disable dragging
          content: content, // Add custom icon
        });
        markersRef.current.push(marker);
      });
    }
  }, [isLoaded, locations]);

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  if (loadError) {
    return <div>Error loading Google Maps. Please try again later.</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10} // Default zoom level
      center={center}
      onLoad={(map) => {
        mapRef.current = map;
      }}
      onUnmount={() => {
        mapRef.current = null;
      }}
      // mapId="YOUR_MAP_ID" // Add your Map ID here
    >
      {/* Fallback Markers in case AdvancedMarkerElement fails */}
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{
            lat: location.coordinates[1],
            lng: location.coordinates[0],
          }}
          icon={{
            url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", // Fallback icon
            scaledSize: new google.maps.Size(20, 32), // Fallback icon size
          }}
          title={`Business Location ${index + 1}`} // Fallback title
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
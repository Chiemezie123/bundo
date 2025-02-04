'use client';

import React, { useEffect, useRef } from "react";
import { BusinessArray } from "./index.types";
import { getBusinessLocations } from "./getLocation";

interface BusinessListProps {
  businesses: BusinessArray;
}

const GoogleMapComponent: React.FC<BusinessListProps> = ({ businesses }) => {
  const mapRef = useRef<HTMLDivElement | null>(null); 
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const locations = getBusinessLocations(businesses);

  useEffect(() => {
    
    const initMap = async () => {
      if (!mapRef.current) return;

      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;


      const map = new Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10,
        mapId: "9c1573fa8e452936",
      });

      markersRef.current.forEach((marker) => (marker.map = null));
      markersRef.current = [];

      locations.forEach((location, index) => {
        const content = document.createElement("div");
        content.innerHTML = `
          <img
            src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            alt="Marker Icon"
            style="width: 20px; height: 32px;"
          />
        `;

        const marker = new AdvancedMarkerElement({
          map: map,
          position: {
            lat: location.coordinates[1],
            lng: location.coordinates[0], 
          },
          title: `Business Location ${index + 1}`, 
          content: content,
        });

        markersRef.current.push(marker);
      });
    };


    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCxQwyVPobLvtCQ5T0lEnBM4203mqODvSk&libraries=marker`;
    script.async = true;
    script.onload = () => {
      initMap().catch((error) => {
        console.error("Error initializing map:", error);
      });
    };
    document.head.appendChild(script);

    
    return () => {
      document.head.removeChild(script);
    };
  }, [locations]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "678px",
        borderRadius: "20px",
      }}
    />
  );
};

export default GoogleMapComponent;
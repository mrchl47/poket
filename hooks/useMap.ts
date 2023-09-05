"use client";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
type MapDataProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  locations: {
    longitude: string;
    latitude: string;
    id: string;
    rideId: String;
  }[];
};
export const useMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  });
  const calculateAndDisplayRoute = (data: MapDataProps, map: any) => {
    if (!map || !data) {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    const waypoints = data.locations.slice(0, 25).map((d) => {
      // API only lets using 25 waypoints for free
      return {
        location: { lat: +d.latitude, lng: +d.longitude },
        stopover: false,
      };
    });
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };
  return {
    isLoaded,
    loadError,
    calculateAndDisplayRoute,
  };
};

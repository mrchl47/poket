"use client";
import { useJsApiLoader } from "@react-google-maps/api";
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
type Location = {
  lat: number;
  lng: number;
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
    const stations = data.locations.map((d) => {
      return {
        lat: +d.latitude,
        lng: +d.longitude,
      };
    });

    const lngs = stations.map((station) => station.lng);
    const lats = stations.map((station) => station.lat);
    map.fitBounds({
      west: Math.min.apply(null, lngs),
      east: Math.max.apply(null, lngs),
      north: Math.min.apply(null, lats),
      south: Math.max.apply(null, lats),
    });

    const startMarker = new google.maps.Marker({
      position: stations[0],
      map: map,
    });
    const endMarker = new google.maps.Marker({
      position: stations[stations?.length - 1],
      map: map,
    });

    const perPart = 25;

    const parts = stations.reduce(
      (locations: Location[][], currentLocation: Location, index) => {
        const locationIndex = Math.floor(index / perPart);
        if (!locations[locationIndex]) {
          locations[locationIndex] = [];
        }

        locations[locationIndex].push(currentLocation);

        return locations;
      },
      []
    );

    const service_callback = function (response: any, status: string | number) {
      if (status != "OK") {
        console.log("Directions request failed due to " + status);
        return;
      }
      const directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);
      directionsDisplay.setOptions({
        suppressMarkers: true,
        preserveViewport: true,
      });
      directionsDisplay.setDirections(response);
    };
    parts.forEach((part) => {
      const waypoints: google.maps.DirectionsWaypoint[] = [];
      part?.forEach((location) => {
        waypoints.push({ location, stopover: false });
      });
      const service_options = {
        origin: part[0],
        destination: part[part.length - 1],
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      };
      directionsService.route(service_options, service_callback);
    });
  };
  return {
    isLoaded,
    loadError,
    calculateAndDisplayRoute,
  };
};

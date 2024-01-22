import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const APIMap = () => {
  const containerStyle = {
    width: "100%",
    height: "200px",
  };

  const center = {
    lat: 21.02872136622196,
    lng: 105.78223018662442,
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyClTQaNr7kb2Xx80EeK5OsdTEfnkfAthw4">
        <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={18}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default APIMap;

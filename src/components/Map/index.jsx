import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.scss";

const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[55.75232, 37.6116908]} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[55.75232, 37.6116908]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

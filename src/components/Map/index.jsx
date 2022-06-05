import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import ChangeView from "./ChangeView";
import UpdateSize from "./UpdateSize";

import { Context } from "../../context";
import { startPoints, finishPoints } from "../../model/data";

import "./styles.scss";

const Map = () => {
  const { selectedRow, requests, updateMapSize } = useContext(Context);

  const getCoordinates = (arrayPoints, pointTitle) => {
    const point = arrayPoints.find(({ title }) => title === pointTitle);

    return point.point;
  };

  const returnCenterPoint = (selectedRow, requests) => {
    if (!selectedRow) {
      return [55.75232, 37.6116908];
    }

    const index = selectedRow - 1;
    const start = requests[index].loading;
    const finish = requests[index].unloading;
    const startCoordinates = getCoordinates(startPoints, start);
    const finishCoordinates = getCoordinates(finishPoints, finish);

    return [
      (startCoordinates[0] + finishCoordinates[0]) / 2,
      (startCoordinates[1] + finishCoordinates[1]) / 2,
    ];
  };

  const getStartMarkerCoordinates = (selectedRow, requests) => {
    const index = selectedRow - 1;
    const start = requests[index].loading;

    return getCoordinates(startPoints, start);
  };

  const getFinishMarkerCoordinates = (selectedRow, requests) => {
    const index = selectedRow - 1;
    const finish = requests[index].unloading;

    return getCoordinates(finishPoints, finish);
  };

  return (
    <div className="map">
      <MapContainer center={returnCenterPoint(selectedRow, requests)} zoom={5}>
        <ChangeView center={returnCenterPoint(selectedRow, requests)} />
        <UpdateSize updateMapSize={updateMapSize} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedRow && (
          <>
            <Marker position={getStartMarkerCoordinates(selectedRow, requests)}>
              <Popup>Погрузка</Popup>
            </Marker>

            <Marker
              position={getFinishMarkerCoordinates(selectedRow, requests)}
            >
              <Popup>Разгрузка</Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;

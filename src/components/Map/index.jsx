import React, { useContext, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import ChangeView from "./ChangeView";
import UpdateSize from "./UpdateSize";

import { Context } from "../../context";
import { startPoints, finishPoints } from "../../model/data";
import { getPolyline } from "../../api";

import "./styles.scss";

const Map = () => {
  const { selectedRow, requests, updateMapSize, polyline, setPolyline } =
    useContext(Context);

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

  const lineOptions = { color: "blue", opacity: 0.6 };

  const buildRoute = async (selectedRow, requests) => {
    const startPoint = getStartMarkerCoordinates(selectedRow, requests);
    const finishPoint = getFinishMarkerCoordinates(selectedRow, requests);

    const path = await getPolyline(startPoint, finishPoint);

    console.log(path);

    if (!path) {
      setPolyline([]);
      console.log("Не удалось загрузить путь между пунктами");
      return;
    }

    for (let i = 0; i < path.length; i++) {
      const [lon, lat] = path[i];
      path[i] = [lat, lon];
    }

    path.unshift(startPoint);
    path.push(finishPoint);

    setPolyline(path);
  };

  useEffect(() => {
    if (!selectedRow) return;

    buildRoute(selectedRow, requests);
  }, [selectedRow, requests]);

  return (
    <div className="map">
      <MapContainer center={returnCenterPoint(selectedRow, requests)} zoom={5}>
        <ChangeView
          center={returnCenterPoint(selectedRow, requests)}
          zoom={5}
        />
        <UpdateSize updateMapSize={updateMapSize} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedRow && (
          <>
            <Marker position={getStartMarkerCoordinates(selectedRow, requests)}>
              <Popup>Погрузка</Popup>
            </Marker>

            <Polyline pathOptions={lineOptions} positions={polyline} />

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

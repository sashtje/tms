import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import ChangeView from "./ChangeView";
import UpdateSize from "./UpdateSize";

import { fetchPath } from "../../store/polylineReducer";
import { startPoints, finishPoints } from "../../model/data";

import "./styles.scss";

const Map = () => {
  const { selectedRow, requests, updateMapSize } = useSelector(
    (state) => state.requestsReducer
  );
  const { polyline } = useSelector((state) => state.polylineReducer);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (!selectedRow) return;

    const startPoint = getStartMarkerCoordinates(selectedRow, requests);
    const finishPoint = getFinishMarkerCoordinates(selectedRow, requests);

    dispatch(fetchPath(startPoint, finishPoint));
  }, [selectedRow, requests]);

  return (
    <div className="map">
      <MapContainer center={[55.75232, 37.6116908]} zoom={5}>
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

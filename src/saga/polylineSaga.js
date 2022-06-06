import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";

import { FETCH_PATH, setPath } from "../store/polylineReducer";

const fetchPathFromApi = (startPoint, finishPoint) => {
  return axios.get(
    `https://graphhopper.com/api/1/route?point=${startPoint.join(
      ","
    )}&point=${finishPoint.join(
      ","
    )}&profile=car&locale=ru&points_encoded=false&key=c95bc167-d0a2-40ae-a556-2000b36f810d`
  );
};

function* fetchPathWorker(args) {
  const response = yield call(() =>
    fetchPathFromApi(args.startPoint, args.finishPoint)
  );
  const coordinates = response.data?.paths[0]?.points?.coordinates;

  if (coordinates) {
    for (let i = 0; i < coordinates.length; i++) {
      const [lon, lat] = coordinates[i];
      coordinates[i] = [lat, lon];
    }

    coordinates.unshift(args.startPoint);
    coordinates.push(args.finishPoint);

    yield put(setPath(coordinates));
  } else {
    yield put(setPath([]));
    console.log("Не удалось загрузить путь между пунктами");
  }
}

export function* polylineWatcher() {
  yield takeEvery(FETCH_PATH, fetchPathWorker);
}

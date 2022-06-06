const defaultState = {
  polyline: [],
};

export const FETCH_PATH = "FETCH_PATH";
export const SET_PATH = "SET_PATH";

export default function polylineReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PATH:
      return { ...state, polyline: action.payload };

    default:
      return state;
  }
}

export const setPath = (payload) => ({ type: SET_PATH, payload });
export const fetchPath = (startPoint, finishPoint) => ({
  type: FETCH_PATH,
  startPoint,
  finishPoint,
});

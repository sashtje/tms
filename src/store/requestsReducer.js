import { data } from "../model/data";

const defaultState = {
  selectedRow: null,
  updateMapSize: false,
  requests: data,
};

export const CHANGE_LOADING_POINT = "CHANGE_LOADING_POINT";
export const CHANGE_UNLOADING_POINT = "CHANGE_UNLOADING_POINT";
export const CHANGE_MAP_SIZE = "CHANGE_MAP_SIZE";
export const CHANGE_SELECTED_ROW = "CHANGE_SELECTED_ROW";

export default function requestsReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LOADING_POINT:
      const updatedRequests = [...state.requests];
      updatedRequests[state.selectedRow - 1].loading = action.payload;

      return { ...state, requests: updatedRequests };

    case CHANGE_UNLOADING_POINT:
      const updatedUnLoadRequests = [...state.requests];
      updatedUnLoadRequests[state.selectedRow - 1].unloading = action.payload;

      return { ...state, requests: updatedUnLoadRequests };

    case CHANGE_MAP_SIZE:
      return { ...state, updateMapSize: !state.updateMapSize };

    case CHANGE_SELECTED_ROW:
      return { ...state, selectedRow: action.payload };

    default:
      return state;
  }
}

export const changeLoadingPoint = (payload) => ({
  type: CHANGE_LOADING_POINT,
  payload,
});
export const changeUnloadingPoint = (payload) => ({
  type: CHANGE_UNLOADING_POINT,
  payload,
});
export const changeMapSize = () => ({ type: CHANGE_MAP_SIZE });
export const changeSelectedRow = (payload) => ({
  type: CHANGE_SELECTED_ROW,
  payload,
});

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { polylineWatcher } from "../saga/polylineSaga";

import polylineReducer from "./polylineReducer";
import requestsReducer from "./requestsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ polylineReducer, requestsReducer });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(polylineWatcher);

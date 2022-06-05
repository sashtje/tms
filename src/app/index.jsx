import { useState } from "react";

import Requests from "../components/Requests";

import { Context } from "../context";
import { data } from "../model/data";

import "./styles.scss";

function App() {
  const [selectedRow, setSelectedRow] = useState();
  const [requests, setRequests] = useState(data);
  const [updateMapSize, setUpdateMapSize] = useState(false);
  const [polyline, setPolyline] = useState([]);

  return (
    <Context.Provider
      value={{
        selectedRow,
        setSelectedRow,
        requests,
        setRequests,
        updateMapSize,
        setUpdateMapSize,
        polyline,
        setPolyline,
      }}
    >
      <Requests />
    </Context.Provider>
  );
}

export default App;

import { useState } from "react";

import Requests from "../components/Requests";

import { Context } from "../context";
import { data } from "../model/data";

import "./styles.scss";

function App() {
  const [selectedRow, setSelectedRow] = useState();
  const [requests, setRequests] = useState(data);

  return (
    <Context.Provider
      value={{ selectedRow, setSelectedRow, requests, setRequests }}
    >
      <Requests />
    </Context.Provider>
  );
}

export default App;

import Split from "react-split";

import Map from "../components/Map";
import RequestsTable from "../components/RequestsTable";

import "./styles.scss";

function App() {
  return (
    <Split minSize={0} className="page">
      <RequestsTable />

      <Map />
    </Split>
  );
}

export default App;

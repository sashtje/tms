import Split from "react-split";

import Map from "../components/Map";

import "./styles.scss";

function App() {
  return (
    <Split sizes={[10, 90]} minSize={0} gutterAlign="start" className="page">
      <div>Pane1</div>
      <Map />
    </Split>
  );
}

export default App;

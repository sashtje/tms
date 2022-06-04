import Split from "react-split";
import { Table } from "antd";

import Map from "../components/Map";

import { columns, data } from "../model/data";

import "./styles.scss";

function App() {
  return (
    <Split minSize={0} className="page">
      <Table columns={columns} dataSource={data} />

      <Map />
    </Split>
  );
}

export default App;

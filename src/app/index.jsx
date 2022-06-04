import { useState } from "react";
import Split from "react-split";
import { Table } from "antd";

import Map from "../components/Map";

import { columns, data } from "../model/data";

import "./styles.scss";

function App() {
  const [selectedRow, setSelectedRow] = useState();

  const onClickRow = ({ number }) => {
    return {
      onClick: () => {
        setSelectedRow(number);
      },
    };
  };

  const setRowClassName = ({ number }) => {
    return number === selectedRow
      ? "table__selected-row table__row"
      : "table__row";
  };

  return (
    <Split minSize={0} className="page">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "auto" }}
        pagination={{
          pageSize: 10,
        }}
        className="table"
        onRow={onClickRow}
        rowClassName={setRowClassName}
      />

      <Map />
    </Split>
  );
}

export default App;

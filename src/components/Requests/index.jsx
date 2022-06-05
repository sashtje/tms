import React, { useContext } from "react";
import Split from "react-split";
import { Table } from "antd";

import Map from "../Map";
import SelectEdit from "../SelectEdit";

import { Context } from "../../context";

const Requests = () => {
  const {
    selectedRow,
    setSelectedRow,
    requests,
    updateMapSize,
    setUpdateMapSize,
  } = useContext(Context);

  const columns = [
    { title: "№", dataIndex: "number", key: "number", fixed: "left" },
    {
      title: "Заявка",
      dataIndex: "request",
      key: "request",
    },
    {
      title: "Погрузка",
      dataIndex: "loading",
      key: "loading",
      render: (_, { loading, number }) => (
        <SelectEdit type="loading" defaultValue={loading} number={number} />
      ),
    },
    {
      title: "Разгрузка",
      dataIndex: "unloading",
      key: "unloading",
      render: (_, { unloading, number }) => (
        <SelectEdit type="unloading" defaultValue={unloading} number={number} />
      ),
    },
  ];

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

  const handleDrag = (sizes) => {
    setUpdateMapSize((updateMapSize) => !updateMapSize);
  };

  return (
    <Split minSize={0} className="page" onDrag={handleDrag}>
      <Table
        columns={columns}
        dataSource={requests}
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
};

export default Requests;

import React from "react";
import { Table } from "antd";

import { columns, data } from "../../model/data";

import "./styles.scss";

const RequestsTable = () => {
  return (
    <div className="table">
      <div className="table__container">
        <Table columns={columns} dataSource={data} scroll={{ x: 300 }} />
      </div>
    </div>
  );
};

export default RequestsTable;

import React, { useContext } from "react";
import { Select } from "antd";

import { startPoints } from "../../model/data";
import { Context } from "../../context";

const { Option } = Select;

const SelectStart = ({ defaultValue }) => {
  const { selectedRow, setRequests } = useContext(Context);

  const handleChange = (value) => {
    setRequests((prevRequests) => {
      const updatedRequests = [...prevRequests];
      updatedRequests[selectedRow - 1].loading = value;
      return updatedRequests;
    });
  };

  return (
    <Select
      defaultValue={defaultValue}
      onChange={handleChange}
      className="select"
    >
      {startPoints.map(({ title }) => (
        <Option key={title}>{title}</Option>
      ))}
    </Select>
  );
};

export default SelectStart;

import React, { useContext } from "react";
import { Select } from "antd";

import { finishPoints } from "../../model/data";
import { Context } from "../../context";

const { Option } = Select;

const SelectFinish = ({ defaultValue }) => {
  const { selectedRow, setRequests } = useContext(Context);

  const handleChange = (value) => {
    setRequests((prevRequests) => {
      const updatedRequests = [...prevRequests];
      updatedRequests[selectedRow - 1].unloading = value;
      return updatedRequests;
    });
  };

  return (
    <Select
      defaultValue={defaultValue}
      onChange={handleChange}
      className="select"
    >
      {finishPoints.map(({ title }) => (
        <Option key={title}>{title}</Option>
      ))}
    </Select>
  );
};

export default SelectFinish;

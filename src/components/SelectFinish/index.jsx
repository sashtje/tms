import React from "react";
import { Select } from "antd";

import { finishPoints } from "../../model/data";

const { Option } = Select;

const SelectFinish = ({ defaultValue }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

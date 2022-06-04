import React from "react";
import { Select } from "antd";

import { startPoints } from "../../model/data";

const { Option } = Select;

const SelectStart = ({ defaultValue }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select defaultValue={defaultValue} onChange={handleChange}>
      {startPoints.map(({ title }) => (
        <Option key={title}>{title}</Option>
      ))}
    </Select>
  );
};

export default SelectStart;

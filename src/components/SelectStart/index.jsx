import React from "react";
import { useDispatch } from "react-redux";
import { Select } from "antd";

import { changeLoadingPoint } from "../../store/requestsReducer";

import { startPoints } from "../../model/data";

const { Option } = Select;

const SelectStart = ({ defaultValue }) => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(changeLoadingPoint(value));
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

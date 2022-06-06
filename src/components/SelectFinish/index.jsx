import React from "react";
import { useDispatch } from "react-redux";
import { Select } from "antd";

import { changeUnloadingPoint } from "../../store/requestsReducer";

import { finishPoints } from "../../model/data";

const { Option } = Select;

const SelectFinish = ({ defaultValue }) => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(changeUnloadingPoint(value));
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

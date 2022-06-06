import React from "react";
import { useSelector } from "react-redux";

import SelectStart from "../../components/SelectStart";
import SelectFinish from "../../components/SelectFinish";

import "./styles.scss";

const SelectEdit = ({ type, defaultValue, number }) => {
  const selectedRow = useSelector((state) => state.requestsReducer.selectedRow);

  return (
    <>
      {number === selectedRow ? (
        type === "loading" ? (
          <SelectStart defaultValue={defaultValue} />
        ) : (
          <SelectFinish defaultValue={defaultValue} />
        )
      ) : (
        defaultValue
      )}
    </>
  );
};

export default SelectEdit;

import React, { useContext } from "react";

import SelectStart from "../../components/SelectStart";
import SelectFinish from "../../components/SelectFinish";

import { Context } from "../../context";

import "./styles.scss";

const SelectEdit = ({ type, defaultValue, number }) => {
  let { selectedRow } = useContext(Context);

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

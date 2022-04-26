import React from "react";

const SelectOptions = ({onSelected}) => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <label className="mx-3 lead fw-normal" >Filter todo:</label>
      <select
        className="form-select form-select-lg  "
        style={{ width: "150px" }}
        onChange={e=>onSelected(e.target.value)}
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
    </div>
  );
};

export default SelectOptions;

import React from "react";

import "../App.css";

export const CheckBox = props => {
  return (
    <div className="checkbox">
      <input
        id={props.id}
        key={props.id}
        type="checkbox"
        onChange={props.handleCheckFieldElement}
        checked={props.isChecked}
        name={props.name}
        className=""
      />
      <label className="" htmlFor={props.id} />
      {props.name}
    </div>
  );
};

export default CheckBox;

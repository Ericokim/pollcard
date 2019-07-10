import React from "react";

import "../App.css";

export const CheckBox = props => {
  return (
    <ul className="round ">
      <div>
        <input
          id={props.id}
          key={props.id}
          type="checkbox"
          onChange={props.handleCheckFieldElement}
          checked={props.isChecked}
          name={props.name}
          className="checkbox-input"
        />
        <label className="checkbox-label" htmlFor={props.id} />
        {props.name}
      </div>
    </ul>
  );
};

export default CheckBox;

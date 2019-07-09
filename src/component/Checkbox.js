import React from "react";

import "../App.css";

export const CheckBox = props => {
  return (
    <ul className="round ">
      <div>
        <input
          id={props.id}
          onChange={props.handleCheckFieldElement}
          type="checkbox"
          checked={props.isChecked}
          name={props.name}
          className="checkbox-input"
        />
        <label className="checkbox-label" key={props.id} for={props.id} />
        {props.name}
      </div>
    </ul>
  );
};

export default CheckBox;

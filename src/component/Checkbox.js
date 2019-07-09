import React from "react";

export const CheckBox = props => {
  return (
    <div className="form-check">
      <ul className="custom-control custom-checkbox">
        <input
          type="checkbox"
          id={props.id}
          onChange={props.handleCheckFieldElement}
          checked={props.isChecked}
          name={props.name}
          className="custom-control-input "
        />
        <label className="custom-control-label" htmlFor={props.id}>
          {props.name}
        </label>
      </ul>
    </div>
  );
};

export default CheckBox;

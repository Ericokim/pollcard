import React from "react";

import "../style.scss";

const Logs = props => {
  return (
    <div className="checkbox">
      <input
        id={props.id}
        key={props.id}
        type="radio"
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

export default Logs;

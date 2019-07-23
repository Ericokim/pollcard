import React from "react";

import "../style.scss";

export const CheckBox = ({ id, isChecked, name, handleCheckFieldElement }) => {
  return (
    <span>
      <input
        id={id}
        key={id}
        type="radio"
        onChange={handleCheckFieldElement}
        checked={isChecked}
        name={name}
      />
      <label htmlFor={id} />
      {name}
    </span>
  );
};

export default CheckBox;

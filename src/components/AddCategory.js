import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) setcategories((cats) => [value, ...cats]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValue} />
    </form>
  );
};
AddCategory.propTypes = {
  setcategories: propTypes.func.isRequired,
};
export default AddCategory;

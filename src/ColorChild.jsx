import React, { useState } from "react";

export default function ColorChild({ getColor }) {
  let [activecolor, setActiveColor] = useState();
  let handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };
  return (
    <>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activecolor}
      />
    </>
  );
}

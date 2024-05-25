import React, { useState } from "react";
import ColorChild from "./ColorChild";

// Parents

export default function ColorParent() {
  let [UIcolor, setUIColor] = useState(null);
  let getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className="App">
      <div
        className="App_color_container"
        style={{ background: `${UIcolor}` }}
      ></div>
      <ColorChild getColor={getColor} />
    </div>
  );
}

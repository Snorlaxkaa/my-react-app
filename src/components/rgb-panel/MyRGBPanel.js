// MyRGBPanel.js
import React, { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  const updateR = (v) => setR(v);
  const updateG = (v) => setG(v);
  const updateB = (v) => setB(v);

  return (
    <div className="component-container">
      <h2 style={{ color: "red" }}>目前色彩</h2>
      <div
        style={{
          width: "300px",
          height: "120px",
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
      />
      <span>R: </span>
      <MySlider onChange={updateR} />
      <span>G: </span>
      <MySlider onChange={updateG} />
      <span>B: </span>
      <MySlider onChange={updateB} />
    </div>
  );
}

export default MyRGBPanel;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [previousColor, setPreviousColor] = useState({ r: 0, g: 0, b: 0 });

  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) });
  };

  const saveColor = () => {
    setPreviousColor(color);  // 將當前顏色保存為上一個顏色
  };

  const colorStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    width: "90%",
    height: "400px",
    marginTop: "20px"
  };

  const previousColorStyle = {
    color: `rgb(${previousColor.r}, ${previousColor.g}, ${previousColor.b})`, // 使用字體顏色而非背景色
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Javascript程式設計</h1>
        <h2 style={previousColorStyle}>5B0G0017黃宗彥</h2>  
        <div>
          <label>R: <input type="range" name="r" min="0" max="255" value={color.r} onChange={updateColor} /></label>
          <span>{color.r}</span>
        </div>
        <div>
          <label>G: <input type="range" name="g" min="0" max="255" value={color.g} onChange={updateColor} /></label>
          <span>{color.g}</span>
        </div>
        <div>
          <label>B: <input type="range" name="b" min="0" max="255" value={color.b} onChange={updateColor} /></label>
          <span>{color.b}</span>
        </div>
        <button onClick={saveColor} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>保存顏色</button>
        <div style={colorStyle} className="color-display">當前顏色</div>
      </header>
    </div>
  );
}

export default App;

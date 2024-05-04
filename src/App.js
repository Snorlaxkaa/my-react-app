import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });

  const updateColor = (e) => {
    setColor({ ...color, [e.target.name]: parseInt(e.target.value, 10) });
  };

  const colorStyle = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    width: "90%", // 保持寬度為容器的100%
    height: "400px", // 將高度增加到400px
    marginTop: "20px"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Javascript程式設計</h1>
        <h2>5B0G0017黃宗彥</h2>
        <label>R: <input type="range" name="r" min="0" max="255" value={color.r} onChange={updateColor} /></label>
        <label>G: <input type="range" name="g" min="0" max="255" value={color.g} onChange={updateColor} /></label>
        <label>B: <input type="range" name="b" min="0" max="255" value={color.b} onChange={updateColor} /></label>
        <div style={colorStyle} className="color-display"></div> {/* 使用類別名稱"color-display" */}
      </header>
    </div>
  );
}

export default App;

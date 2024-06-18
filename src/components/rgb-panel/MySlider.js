import { useState } from "react";
import "./MySlider.css"; // 引入CSS文件

function MySlider({ onChange }) {
  const [value, setValue] = useState(128);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="slider-container"> {/* 添加容器樣式類 */}
      <input
        type="range"
        className="slider" // 添加滑塊樣式類
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
      <span className="slider-value">{value}</span> {/* 添加文本樣式類 */}
    </div>
  );
}

export default MySlider;

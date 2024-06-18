import React, { useState } from "react";
import MyButton from "./MyButton";
import MyDisplay from "./MyDisplay";
import "./MyCalculator.css";

function MyCalculator() {
  const [result, setResult] = useState("0");

  const handleButtonClick = (value) => {
    // 處理按鈕點擊事件的邏輯
    if (value === "c") {
      setResult("0");
    } else if (value === "+/-") {
      setResult((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev));
    } else if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setResult((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="calculator">
      <MyDisplay result={result} />
      <MyButton buttonClicked={handleButtonClick} />
    </div>
  );
}

export default MyCalculator;

import React from "react";
import "./MyCalculator.css";

function MyButton(props) {
  const handleClick = (e) => {
    props.buttonClicked(e.target.value);
  };

  return (
    <div className="board">
      <div>
        <button className="btn btn-action" value="c" onClick={handleClick}>C</button>
        <button className="btn btn-action" value="+/-" onClick={handleClick}>+/-</button>
        <button className="btn btn-action" value="%" onClick={handleClick}>%</button>
        <button className="btn btn-operator" value="/" onClick={handleClick}>/</button>
      </div>
      <div>
        <button className="btn" value="7" onClick={handleClick}>7</button>
        <button className="btn" value="8" onClick={handleClick}>8</button>
        <button className="btn" value="9" onClick={handleClick}>9</button>
        <button className="btn btn-operator" value="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button className="btn" value="4" onClick={handleClick}>4</button>
        <button className="btn" value="5" onClick={handleClick}>5</button>
        <button className="btn" value="6" onClick={handleClick}>6</button>
        <button className="btn btn-operator" value="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button className="btn" value="1" onClick={handleClick}>1</button>
        <button className="btn" value="2" onClick={handleClick}>2</button>
        <button className="btn" value="3" onClick={handleClick}>3</button>
        <button className="btn btn-operator" value="+" onClick={handleClick}>+</button>
      </div>
      <div>
        <button className="btn btn-0" value="0" onClick={handleClick}>0</button>
        <button className="btn" value="." onClick={handleClick}>.</button>
        <button className="btn btn-operator" value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default MyButton;

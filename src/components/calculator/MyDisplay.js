import React from 'react';
import "./MyCalculator.css";

function MyDisplay(props) {
  return <div className='display'>{props.result}</div>;
}

export default MyDisplay;

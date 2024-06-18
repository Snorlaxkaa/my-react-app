import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header-info">
          <h1>學號: 5b0g0017  姓名: 黃宗彥</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/myslider">MySlider</Link>
            </li>
            <li>
              <Link to="/myrgbpanel">MyRGBPanel</Link>
            </li>
            <li>
              <Link to="/mycalculator">MyCalculator</Link>
            </li>
            <li>
              <Link to="/tictactoe">Tic-Tac-Toe</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/myslider" element={<><h1>MySlider</h1><MySlider /></>} />
          <Route path="/myrgbpanel" element={<><h1>MyRGBPanel</h1><MyRGBPanel /></>} />
          <Route path="/mycalculator" element={<><h1>MyCalculator</h1><MyCalculator /></>} />
          <Route path="/tictactoe" element={<><h1>Tic-Tac-Toe Game</h1><TicTacToe /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

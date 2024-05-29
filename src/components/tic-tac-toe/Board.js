// 引入 React 庫
import React from "react";

// 引入子元件 Square，代表井字棋的單個格子
import Square from "./Square";

// 引入 CSS 檔案，用於設定井字棋遊戲的樣式
import "./tictactoe.css";

// 定義 Board 元件，接收三個屬性 xIsNext、squares 和 onPlay
function Board({ xIsNext, squares, onPlay }) {
  // 定義處理格子被點擊的函式 handleClick
  const handleClick = (i) => {
    // 複製當前棋盤狀態
    const nextSquares = squares.slice();
    // 判斷當前玩家是 'X' 還是 'O'，並更新點擊的格子
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 呼叫父元件傳遞下來的 onPlay 函式，更新棋盤狀態
    onPlay(nextSquares);
  };

  // 設定遊戲狀態訊息，顯示下一個玩家是誰
  let status = "下一個玩家: " + (xIsNext ? "X" : "O");

  // 返回 JSX 結構，構建遊戲棋盤
  return (
    <>
      {/* 顯示遊戲狀態訊息 */}
      <div className="status">{status}</div>
      {/* 渲染第一排的三個格子 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      {/* 渲染第二排的三個格子 */}
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      {/* 渲染第三排的三個格子 */}
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 將 Board 元件導出，以便在其他地方使用
export default Board;
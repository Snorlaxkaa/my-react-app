// 引入 React 和 useState Hook，用來管理元件的狀態
import React, { useState } from "react";

// 引入子元件 Board，代表井字棋的棋盤
import Board from "./Board";

// 引入 CSS 檔案，用於設定井字棋遊戲的樣式
import "./tictactoe.css";

// 定義主元件 TicTacToe
function TicTacToe() {
  // 使用 useState Hook 定義 history 狀態變數，初始值為包含一個全 null 陣列的陣列，表示初始的棋盤狀態
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 使用 useState Hook 定義 currentMove 狀態變數，初始值為 0，表示當前的步數
  const [currentMove, setCurrentMove] = useState(0);
  // 根據當前步數取得當前棋盤的狀態
  const currentSquares = history[currentMove];
  // 計算下一步棋子是 'X' 還是 'O'，若 currentMove 為偶數則為 'X'，否則為 'O'
  const xIsNext = currentMove % 2 === 0;

  // 定義處理玩家落子的函式 handlePlay
  const handlePlay = (nextSquares) => {
    // 創建新的歷史紀錄，包含當前步數之前的所有盤面狀態以及新的一步
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // 更新 history 狀態變數
    setHistory(nextHistory);
    // 更新 currentMove 狀態變數為新歷史紀錄的最後一步
    setCurrentMove(nextHistory.length - 1);
  };

  // 返回 JSX 結構，構建遊戲介面
  return (
    <div className="game">
      {/* 定義遊戲棋盤的容器 */}
      <div className="game-board">
        {/* 傳遞 xIsNext、squares 和 onPlay 屬性給 Board 元件 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  );
}

// 將 TicTacToe 元件導出，以便在其他地方使用
export default TicTacToe;
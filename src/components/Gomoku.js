import React, { useState } from 'react';
import player1 from "../assets/chiken.png"
import player2 from "../assets/wolf.png";

const BOARD_SIZE = 19;
const EMPTY = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const createBoard = () => {
  const board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    const row = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      row.push(EMPTY);
    }
    board.push(row);
  }
  return board;
};

const Gomoku = () => {
  const [board, setBoard] = useState(createBoard());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleCellClick = (row, col) => {
    if (board[row][col] === EMPTY) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      if (checkWinCondition(row, col)) {
        alert(`Player ${currentPlayer} wins!`);
        if (currentPlayer === PLAYER_1) {
          setPlayer1Score(player1Score + 1);
        } else {
          setPlayer2Score(player2Score + 1);
        }
        resetBoard();
        return;
      }

      setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
  };

  const checkWinCondition = (row, col) => {
    const directions = [
      [0, 1],    // Horizontal
      [1, 0],    // Vertical
      [1, 1],    // Diagonal (/)
      [1, -1]    // Diagonal (\)
    ];

    for (const element of directions) {
      const [dx, dy] = element;
      let count = 1;

      for (let j = -4; j <= 4; j++) {
        if (j === 0) continue;
        const newRow = row + j * dx;
        const newCol = col + j * dy;

        if (
          newRow >= 0 &&
          newRow < BOARD_SIZE &&
          newCol >= 0 &&
          newCol < BOARD_SIZE &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
          if (count === 5) return true;
        } else {
          count = 1;
        }
      }
    }

    return false;
  };

  const resetBoard = () => {
    setBoard(createBoard());
    setCurrentPlayer(PLAYER_1);
  };

  return (
    <div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
         {cell === PLAYER_1 && (
           <img src={player1} alt=" Icon"style={{ width: '30px', height: '30px' }}></img>

                )}
                {cell === PLAYER_2 && (
                  <img src={player2} alt="Player 2"   style={{ width: '30px', height: '30px' }} />
                )}
              </div>
            ))}
          </div>
        ))}
          <img src={player1} alt="Player 1" style={{ width: '20px', height: '20px' }} /> Player 1 Score: {player1Score}
          <img src={player2} alt="Player 1" style={{ width: '20px', height: '20px' }} /> Player 2 Score: {player2Score}
      </div>
      <button onClick={resetBoard} 
      >Reset</button>

      </div>
    );
  };
  
  export default Gomoku;
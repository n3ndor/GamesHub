
"use client"

import { useState, useEffect } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(" "));
  const [winner, setWinner] = useState(null);

  useEffect(() => {
      fetch('http://localhost:8000/tictactoe/', {
          method: 'GET',
          credentials: 'include',
      })
      .then(response => response.json())
      .then(data => {
          setBoard(data.board);
          setWinner(data.winner);
      })
      .catch(error => console.error('Error fetching the game board: ', error));
  }, []);

  const handleCellClick = (index: number) => {
      if (board[index] !== " " || winner) return;

      fetch('http://localhost:8000/tictactoe/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ index }),
          credentials: 'include',
      })
      .then(response => response.json())
      .then(data => {
          setBoard(data.board);
          setWinner(data.winner);
      })
      .catch(error => console.error('Error making a move: ', error));
  };

  const resetGame = () => {
    fetch('http://localhost:8000/tictactoe/', {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        setBoard(data.board);
        setWinner(null);
    })
    .catch(error => console.error('Error resetting the game board: ', error));
  };


  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <div className="w-full max-w-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mx-4 sm:mx-0">
            <h2 className="text-3xl font-bold text-center mb-8">Tic-Tac-Toe Game</h2>
            <div className="grid grid-cols-3 gap-3">
                {board.map((cell, index) => (
                <div key={index} 
                  className={`h-20 w-20 flex justify-center items-center text-4xl rounded 
                              ${cell === 'X' ? 'bg-green-300 text-green-800' : 
                              cell === 'O' ? 'bg-red-300 text-red-800' : 
                              'bg-blue-500 text-blue-800 hover:bg-blue-700 cursor-pointer'}`}
                  onClick={() => handleCellClick(index)}>
                  {cell}
                </div>
                ))}
            </div>
            <p className={`text-center text-xl font-bold mt-6 ${winner ? 'animate-bounce' : 'animate-pulse'}`}>
                  {winner ? `Winner: ${winner}` : "Click on an empty cell to place 'X'"}
            </p>
            <button onClick={resetGame} className="float-right mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Start new Game
            </button>
          </div>
      </div>
  );
}
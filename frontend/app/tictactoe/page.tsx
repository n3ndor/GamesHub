
"use client"

import { useState, useEffect } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(" "));

  useEffect(() => {
      fetch('http://localhost:8000/tictactoe/', {
          method: 'GET',
          credentials: 'include',
      })
      .then(response => response.json())
      .then(data => {
          setBoard(data.board);
      })
      .catch(error => console.error('Error fetching the game board: ', error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mx-4 sm:mx-0">
            <h2 className="text-3xl font-bold text-center mb-8">Tic-Tac-Toe Game</h2>
            <div className="grid grid-cols-3 gap-3">
                {board.map((cell, index) => (
                    <div key={index} className="h-20 w-20 flex justify-center items-center text-4xl bg-blue-500 text-white font-bold rounded">
                        {cell}
                    </div>
                ))}
            </div>
            <p className="text-center text-xl font-bold mt-6 animate-pulse">Place your mark in the grid!</p>
        </div>
    </div>
);
}
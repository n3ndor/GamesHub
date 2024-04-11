
"use client"

import { useState, useEffect } from 'react';

export default function GuessNumber() {
  const [guess, setGuess] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/guessnumber/', {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      setHint(data.message);
    })
    .catch(error => console.error('Error starting game: ', error));
  }, []);

  const checkGuess = () => {
    if (!guess) {
      setHint("Please enter a number to guess.");
      return;
    }
    fetch('http://localhost:8000/guessnumber/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: guess }),
    })
    .then(response => response.json())
    .then(data => {
      setHint(data.hint);
    })
    .catch(error => console.error('Error checking guess: ', error));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const resetGame = () => {
    setGuess('');
    setHint('');
    fetch('http://localhost:8000/guessnumber/', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      setHint(data.message);
    })
    .catch(error => console.error('Error restarting game: ', error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mx-4 sm:mx-0">
        <div className="space-y-4">
          <input
            type="number"
            className="shadow border rounded w-full py-2 px-3"
            value={guess}
            onChange={handleInputChange}
            placeholder="Enter your guess..."
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={checkGuess}
          >
            Check My Guess
          </button>
          <p className="text-center">hint: guess {hint}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetGame}
          >
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
}
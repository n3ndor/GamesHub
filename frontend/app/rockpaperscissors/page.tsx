
"use client"

import { useState } from 'react';

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState('');
  const [opponentChoice, setOpponentChoice] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:8000/rockpaperscissors/')
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  const playGame = (choice:any) => {
    setUserChoice(choice);
    fetch("http://localhost:8000/rockpaperscissors/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_choice: choice }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGameStarted(true);
        setOpponentChoice(data.server_choice);
        setGameResult(data.result);
      })
      .catch((error) => console.error("Error in fetching data: ", error));
  };

  const resetGame = () => {
    setGameStarted(false);
    setUserChoice('');
    setGameResult('');
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center my-8">Rock Paper Scissors Game</h2>
      {!gameStarted ? (
        <div className="flex justify-center space-x-4">
          {['rock', 'paper', 'scissors'].map((choice) => (
            <button
              key={choice}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => playGame(choice)}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <div className="my-4">
            <p className="text-lg">
              Your choice: <span className="font-semibold">{userChoice}</span>
            </p>
            <p className="text-lg">
              Opponent's choice: <span className="font-semibold">{opponentChoice}</span>
            </p>
            <p className="mt-4 text-xl font-bold">{gameResult}</p>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={resetGame}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}
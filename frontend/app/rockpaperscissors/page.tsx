
"use client"

import { useState } from 'react';

interface IChoice {
  value: string;
}

const choices: IChoice[] = [
  { value: 'rock' },
  { value: 'paper' },
  { value: 'scissors' },
];

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<string>('');
  const [opponentChoice, setOpponentChoice] = useState<string>('');
  const [gameResult, setGameResult] = useState<string>('');
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // useEffect(() => {
  //   fetch('http://localhost:8000/rockpaperscissors/')
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

    const playGame = (choice: string) => {
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
  
    const choiceButton = (choice: string) => (
      <button
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded"
        style={{ pointerEvents: 'none' }} // Disable click
      >
        {choice.charAt(0).toUpperCase() + choice.slice(1)}
      </button>
    );

    const resultTextColor = gameResult.includes('winner') ? 'text-green-500'
    : gameResult.includes('lost') ? 'text-red-500'
    : gameResult.includes('draw') ? 'text-yellow-500'
    : 'text-black';

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200 w-full">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8  mx-4 sm:mx-0">
          <h2 className="text-3xl font-bold text-center sm:mb-8">Rock Paper Scissors Game</h2>
          
          {!gameStarted ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-4">
                {choices.map(({ value }) => (
                  <button
                    key={value}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 rounded"
                    onClick={() => playGame(value)}
                  >
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </button>
                ))}
              </div>
              <p className="text-center text-xl font-bold animate-pulse mt-4 sm:mt-20">Select rock, paper, or scissors to play against the opponent.</p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <div className='flex flex-col sm:flex-row w-full justify-between items-center sm:items-start'>
                <div className="mb-4 flex flex-col justify-between items-center">
                  <p className="text-lg font-semibold mb-2">Your Choice was</p>
                  {choiceButton(userChoice)}
                </div>
                <div className="mb-4 flex flex-col justify-between items-center">
                  <p className="text-lg font-semibold mb-2">Opponent's Choice</p>
                  {choiceButton(opponentChoice)}
                </div>
              </div>
              <p className={`text-xl font-bold mb-4 animate-pulse ${resultTextColor}`}>{gameResult}</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={resetGame}
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

"use client"

import { useState, useEffect } from 'react';

export default function RockPaperScissors() {
  const [message, setMessage] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [gameResult, setGameResult] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:8000/rockpaperscissors/')
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

const playGame = (choice:any) =>{
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
      setMessage(data.message);
      setGameResult(`Your choice: ${data.your_choice}, Server's choice: ${data.server_choice}. ${data.result}`);
    })
    .catch((error)=> console.error("Error in fetching data: ", error));
}

  return (
    <div>
      <h2>Rock Paper Scissors Game</h2>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      <h2>{message}</h2>
      <p>{gameResult}</p>
    </div>
  );
}
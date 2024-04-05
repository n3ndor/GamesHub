
"use client"

import { useState, useEffect } from 'react';

export default function RockPaperScissors() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/rockpaperscissors/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

"use client"

import { useState } from 'react';

export default function Blackjack() {
  const [card, setCard] = useState('');

  const fetchRandomCard = async () => {
    const response = await fetch('http://localhost:8000/blackjack/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setCard(data.card);
  };

  return (
    <div>
      <button onClick={fetchRandomCard} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Get Random Card</button>
      <p>{card}</p>
    </div>
  );
}

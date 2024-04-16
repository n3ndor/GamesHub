
"use client"

import { useState } from 'react';

export default function Blackjack() {
  const [card, setCard] = useState<string[]>([]);

  const fetchCard = async () => {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mx-4 sm:mx-0">
        <h1 className="text-3xl font-bold text-center mb-8">Blackjack Game</h1>
        <button onClick={fetchCard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full text-center">
          Draw Cards
        </button>
        {card.length > 0 && (
          <div className="space-y-4 mt-4">
            {card.map((card, index) => (
              <p key={index}>
                {card}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

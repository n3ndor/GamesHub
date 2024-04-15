
"use client"

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const response = await fetch('http://localhost:8000/blackjack/');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={fetchMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-4 rounded">Fetch Api</button>
      <p>{message}</p>
    </div>
  );
}

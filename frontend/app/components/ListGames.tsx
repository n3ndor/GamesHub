
"use client"

import { useEffect, useState } from 'react';

interface Game {
  name: string;
  url: string;
}

const ListGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {

    fetch('http://localhost:8000/api/games/')
      .then((response) => response.json())
      .then(setGames)
      .catch((error) => console.error('Fetching games failed:', error));
  }, []);

  return (
    <div className="mt-8">
      <div className='flex'>
      <p>cards:</p>
        {games.map((game, index) => (
          <div key={index} className="p-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{game.name}</div>
              <a href={game.url} className="bg-blue-500 text-white py-2 px-4 rounded">
                Play Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGames;

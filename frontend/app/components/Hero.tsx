
"use client"

import { useRef } from 'react';


function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);



  return (
    <div className="relative z-20 bg-gray-900 overflow-hidden w-full md:w-1/3 md:min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen p-8">
        <canvas ref={canvasRef} className="w-full h-auto"></canvas>
        <h1 className="text-3xl font-bold text-white mt-8 mb-8">GamesHub</h1>
      </div>
    </div>
  );
}

export default Hero;
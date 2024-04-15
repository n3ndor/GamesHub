import React from 'react';

const UnderDevelopment = () => {
  return (
    <div className="fixed top-0 right-0 md:top-[20%] md:-right-[20%] z-50 md:rotate-45">
        <div className="flex flex-col bg-yellow-400 text-black text-sm font-bold px-16 sm:px-40 py-1 rotate-75 transform origin-bottom-right drop-shadow-2xl">
            <p className="text-xs text-right md:pb-2 pr-6 hidden md:block">Check back later for updates!</p>
            <p className="text-center">CAUTION: This page is UNDER CONSTRUCTION <span className='md:hidden whitespace-nowrap'>// Check later for updates!</span></p>
        </div>
    </div>
  );
}

export default UnderDevelopment;
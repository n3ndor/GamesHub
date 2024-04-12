import React from 'react';

const UnderDevelopment = () => {
  return (
    <div className="fixed top-[20%] -right-[20%] z-50 rotate-45">
        <div className="bg-yellow-400 text-black text-sm font-bold px-40 py-1 rotate-75 transform origin-bottom-right drop-shadow-2xl">
            <p className="text-xs text-right pb-2 pr-6">Check back later for updates!</p>
            <p className="tracking-wider">CAUTION: This page is UNDER CONSTRUCTION</p>
        </div>
    </div>
  );
}

export default UnderDevelopment;

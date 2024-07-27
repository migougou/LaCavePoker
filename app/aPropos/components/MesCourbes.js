'use client'
import { useState } from 'react';

export default function MesCourbes() {
  const [selectedLimit, setSelectedLimit] = useState('5');

  const handleSelectLimit = (limit) => {
    setSelectedLimit(limit);
  };

  return (
    <div>
      <div className="flex space-x-4 p-4">
        {['5€', '10€', '20€', '50€'].map((limit) => (
          <button key={limit} onClick={() => handleSelectLimit(limit)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {limit}
          </button>
        ))}
      </div>
      <img src={`/path/to/curve-${selectedLimit}.png`} alt={`Courbe pour ${selectedLimit}`} className="w-full"/>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div className='grid grid-cols-4 gap-6 rounded-lg'>
        {data.map((rick) => (
          <div className='flex flex-col gap-2 pb-4 max-w-sm rounded-lg overflow-hidden shadow-lg'>
            <img className='h-[200px]' src={rick.image} alt={rick.name} />
            <span className='text-slate-900 text-xl font-semibold'>{rick.name}</span>
          </div>
        ))}
    </div>
  );
}

export default App;

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
    <div className='flex flex-row h-full w-full flex-wrap gap-2 justify-center'>
        {data.map((rick) => (
          <div className='flex flex-col gap-2 pb-4 '>
            <img className='h-[200px] w-[200px]] rounded-2xl' src={rick.image} alt="image" />
            <span className='text-teal-900'>{rick.name}</span>
          </div>
        ))}
    </div>
  );
}

export default App;

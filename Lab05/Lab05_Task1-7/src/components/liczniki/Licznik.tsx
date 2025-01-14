import React, { useState } from 'react';

const Licznik: React.FC = () => {

  const [count, setCount] = useState(0);


  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='centered-container'>
      <h2>Licznik</h2>
      <div>Stan licznika: {count}</div>
      <button onClick={increment}>Dodaj</button>
    </div>
  );
};

export default Licznik;
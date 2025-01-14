import React, { useState } from 'react';
import Przycisk from './Przycisk';

const NowyLicznik: React.FC = () => {
  const [licznik, setLicznik] = useState(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div className='centered-container'>
      <h2>Nowy Licznik</h2>
      <div>Stan licznika: {licznik}</div>
      <Przycisk onClick={dodaj} />
    </div>
  );
};

export default NowyLicznik;
import React from 'react';
import Produkt from './Produkt';

const NowyKoszyk: React.FC = () => {
  const Produkty = ['Jabłko', 'Gruszka', 'Banany', 'Pomarańcze', 'Arbuz'];

  return (
    <div className='centered-container'>
      <h2>Nowy Koszyk</h2>
      {Produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;
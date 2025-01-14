import React from 'react';
import Produkt from './Produkt';

const Koszyk: React.FC = () => {
  return (
    <div className='centered-container'>
      <h2>Koszyk</h2>
      <Produkt nazwa="Jabłko" />
      <Produkt nazwa="Gruszka" />
      <Produkt nazwa="Banany" />
      <Produkt nazwa="Pomarańcze" />
      <Produkt nazwa="Arbuz" />
    </div>
  );
};

export default Koszyk;
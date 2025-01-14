import React, { useState } from 'react';

const Aktualizacja: React.FC = () => {

  const [product, setProdukt] = useState({ name: 'Pomidor', price: 50 });


  const changePrice = () => {
    setProdukt((prev) => ({
      ...prev,
      price: 100,
    }));
  };

  return (
    <div className='centered-container'>
      <h2>Aktualizacja</h2>
      <div>
        Aktualnie {product.name} kosztuje {product.price}.
      </div>
      <button onClick={changePrice}>Zmień cenę</button>
    </div>
  );
};

export default Aktualizacja;
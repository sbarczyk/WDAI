import React, { useState, useEffect } from 'react';

const Tytul: React.FC = () => {

  const [title, setTitle] = useState('');


  useEffect(() => {
    document.title = title ? title : 'Domyślny tytuł';
  }, [title]);

  return (
    <div className='form-container'>
      <h2>Synchronizacja tytułu strony</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Wpisz tytuł strony"
      />
    </div>
  );
};


export default Tytul;
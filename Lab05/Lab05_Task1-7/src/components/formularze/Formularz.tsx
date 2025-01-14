import React, { useState } from 'react';

const Formularz: React.FC = () => {

  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className='form-container'>
      <h2>Formularz</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Wprowadź znaki..." 
      />
      <div>{text}</div>
    </div>
  );
};

export default Formularz;
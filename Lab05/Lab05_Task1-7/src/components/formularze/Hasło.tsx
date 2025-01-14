import React, { useState } from 'react';

const Haslo: React.FC = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const getMessage = () => {
    if (!password && !confirmPassword) {
      return 'Proszę wprowadzić hasło';
    } else if (password !== confirmPassword) {
      return 'Hasła nie są zgodne';
    } else {
      return '';
    }
  };

  return (
    <div className='form-container'>
      <h2>Hasło</h2>
      <div>
        <label>
          Hasło:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Wprowadź hasło"
          />
        </label>
      </div>
      <div>
        <label>
          Powtórz Hasło:
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Powtórz hasło"
          />
        </label>
      </div>
      <div>{getMessage()}</div>
    </div>
  );
};

export default Haslo;
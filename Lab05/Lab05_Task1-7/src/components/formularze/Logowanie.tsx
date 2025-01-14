import React, { useState } from 'react';

const Logowanie: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const areFieldsFilled = () => username && password && confirmPassword;


  const handleLogin = () => {
    if (password !== confirmPassword) {
      alert('Hasła nie są zgodne');
    } else {
      alert('Zalogowano poprawnie');
    }
  };

  return (
    <div className='form-container'>
      <h2>Logowanie</h2>
      <div>
        <label>
          Nazwa użytkownika:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Wprowadź nazwę użytkownika"
          />
        </label>
      </div>
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
      <button
        onClick={handleLogin}
        disabled={!areFieldsFilled()}
      >
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;
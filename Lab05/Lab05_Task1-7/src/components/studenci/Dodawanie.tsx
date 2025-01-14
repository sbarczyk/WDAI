import React, { useState } from 'react';

interface DodawanieProps {
  onAddStudent: (newStudent: { imie: string; nazwisko: string; rocznik: number }) => void;
}

const Dodawanie: React.FC<DodawanieProps> = ({ onAddStudent }) => {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [rocznik, setRocznik] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imie || !nazwisko || !rocznik || isNaN(Number(rocznik))) {
      alert('Wszystkie dane muszą być poprawne i rocznik musi być liczbą.');
      return;
    }

    onAddStudent({ imie, nazwisko, rocznik: Number(rocznik) });

    setImie('');
    setNazwisko('');
    setRocznik('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={headingStyle}>Dodaj nowego studenta</h3>
      <div style={rowStyle}>
        <label style={labelStyle}>Imię:</label>
        <input
          type="text"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Nazwisko:</label>
        <input
          type="text"
          value={nazwisko}
          onChange={(e) => setNazwisko(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Rocznik:</label>
        <input
          type="text"
          value={rocznik}
          onChange={(e) => setRocznik(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Dodaj</button>
    </form>
  );
};

// Stylizacja

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  width: '300px',
  margin: '20px auto',
};

const headingStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
  width: '100%',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
};

const labelStyle: React.CSSProperties = {
  flex: '0 0 30%',
  textAlign: 'right',
  paddingRight: '10px',
};

const inputStyle: React.CSSProperties = {
  flex: '1 1 auto',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle: React.CSSProperties = {
  alignSelf: 'center',
  padding: '8px 16px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Dodawanie;
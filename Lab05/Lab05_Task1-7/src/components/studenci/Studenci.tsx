import React from 'react';


interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Studenci: React.FC = () => {

  const Students: Student[] = [
    { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2000 },
    { imie: 'Anna', nazwisko: 'Nowak', rocznik: 1999 },
    { imie: 'Piotr', nazwisko: 'Wiśniewski', rocznik: 2001 },
    { imie: 'Katarzyna', nazwisko: 'Zielińska', rocznik: 1998 },
  ];

  return (
    <div className='centered-container'>
      <h2>Studenci</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  marginTop: '10px',
};

export default Studenci;
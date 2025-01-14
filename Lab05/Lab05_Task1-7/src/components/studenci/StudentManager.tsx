import React, { useState } from 'react';
import Dodawanie from './Dodawanie';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const StudentManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2000 },
    { imie: 'Anna', nazwisko: 'Nowak', rocznik: 1999 },
    { imie: 'Piotr', nazwisko: 'Wiśniewski', rocznik: 2001 },
    { imie: 'Katarzyna', nazwisko: 'Zielińska', rocznik: 1998 },
  ]);

  const addStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className='centered-container'>
      <h2>Student Manager</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dodawanie onAddStudent={addStudent} />
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  marginTop: '10px',
};

export default StudentManager;
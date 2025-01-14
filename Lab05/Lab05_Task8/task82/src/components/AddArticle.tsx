import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const articles = JSON.parse(localStorage.getItem('articles') || '[]');
    const newArticle = { id: Date.now(), title, content };

    localStorage.setItem('articles', JSON.stringify([...articles, newArticle]));
    navigate('/blog');
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>DODAJ ARTYKUŁ</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Treść"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={textareaStyle}
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5ba7ff')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e88e5')}
        >
          Dodaj
        </button>
      </form>
    </div>
  );
};

const formContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  backgroundColor: '#1e1e1e',
  fontFamily: "'Roboto', sans-serif",
};

const headingStyle: React.CSSProperties = {
  fontSize: '42px',
  marginBottom: '30px',
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: 'bold',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '#2c2c2c',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#3c3c3c',
  color: '#ffffff', 
  fontFamily: "'Roboto', sans-serif",
};

const textareaStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  height: '150px',
  backgroundColor: '#3c3c3c',
  color: '#ffffff',
  resize: 'none',
  fontFamily: "'Roboto', sans-serif",
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ffffff',
  backgroundColor: '#1e88e5',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontFamily: "'Roboto', sans-serif",
};

export default AddArticle;
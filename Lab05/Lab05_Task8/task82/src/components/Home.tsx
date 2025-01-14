import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={homeContainerStyle}>
      <div style={welcomeSectionStyle}>
        <h1>Witamy na Blogu!</h1>
        <p>Odkryj ciekawe artykuły lub dodaj własny!</p>
        <Link
          to="/blog"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5ba7ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1e88e5';
          }}
        >
          Przeglądaj Blog
        </Link>
      </div>
    </div>
  );
};


const homeContainerStyle: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
};

const welcomeSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: '#1e88e5',
  color: '#fff',
  fontSize: '16px',
  borderRadius: '5px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Home;
import React from 'react';
import { useParams } from 'react-router-dom';

const Article: React.FC = () => {
  const { id } = useParams();
  const articles = JSON.parse(localStorage.getItem('articles') || '[]');
  const article = articles.find((a: any) => a.id === parseInt(id || '0'));

  return (
    <div style={containerStyle}>
      {article ? (
        <>
          <h1 style={titleStyle}>{article.title}</h1>
          <p style={contentStyle}>{article.content}</p>
        </>
      ) : (
        <p style={notFoundStyle}>Artykuł nie znaleziony!</p>
      )}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  padding: '100px 20px',
  backgroundColor: '#1e1e1e',
  color: '#ffffff',
  fontFamily: "'Roboto', sans-serif",
  minHeight: '100vh',
  textAlign: 'left',
};

const titleStyle: React.CSSProperties = {
  fontSize: '36px',
  marginBottom: '20px',
  fontWeight: 'bold',
};

const contentStyle: React.CSSProperties = {
  fontSize: '18px',
  lineHeight: '1.6',
  textAlign: 'justify',
};

const notFoundStyle: React.CSSProperties = {
  fontSize: '18px',
  textAlign: 'center',
  color: '#f44336',
};

export default Article;
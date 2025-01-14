import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({ id, body, postId, likes, user }) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleDislike = () => setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div style={commentContainerStyle}>
      <div style={userInfoStyle}>
        <h4 style={userNameStyle}>{user.fullName}</h4>
        <small style={usernameStyle}>@{user.username}</small>
      </div>
      <p style={commentBodyStyle}>{body}</p>
      <div style={interactionStyle}>
        <div style={likesContainerStyle}>
          <span style={likesStyle}>Likes: {likeCount}</span>
        </div>
        <div style={buttonContainerStyle}>
          <button onClick={handleLike} style={buttonStyle}>👍</button>
          <button onClick={handleDislike} style={buttonStyle}>👎</button>
        </div>
      </div>
      <small style={footerStyle}>Post ID: {postId} | Comment ID: {id}</small>
    </div>
  );
};


const commentContainerStyle: React.CSSProperties = {
  backgroundColor: 'rgba(40, 40, 40, 0.9)', // Ciemniejsze tło dla komentarza
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '20px',
  maxWidth: '600px',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const userInfoStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  paddingBottom: '10px',
};

const userNameStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
};

const usernameStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#4dabf7',
};

const commentBodyStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.6',
  margin: 0,
};

const interactionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
};

const likesContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const likesStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#ccc',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 15px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: 'darkgrey',
    color: '#000',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };



const footerStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '12px',
  color: '#888',
  textAlign: 'right',
};

export default Komentarz;
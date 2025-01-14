import React, { useState, useEffect } from 'react';
import Komentarz from './komentarz';


interface User {
  id: number;
  username: string;
  fullName: string;
}


interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}


const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then((data) => {

        const formattedComments: Comment[] = data.comments.map((comment: any) => ({
          id: comment.id,
          body: comment.body,
          postId: comment.postId,
          likes: comment.likes,
          user: {
            id: comment.user.id || comment.id,
            username: comment.user?.username || `user_${comment.id}`,
            fullName: comment.user?.fullName || `User ${comment.id}`,
          },
        }));
        setComments(formattedComments);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Komentarze</h2>
      {loading ? (
        <p>Ładowanie komentarzy...</p>
      ) : (
        comments.map((comment) => (
          <Komentarz
            key={comment.id}
            id={comment.id}
            body={comment.body}
            postId={comment.postId}
            likes={comment.likes}
            user={comment.user}
          />
        ))
      )}
    </div>
  );
};

export default Komentarze;
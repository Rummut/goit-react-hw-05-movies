import { useEffect, useState } from 'react';
import { GetReviews } from 'components/api-request';
import { useLocation, useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { results } = await GetReviews(movieId);
        setAuthor(results);
      } catch (error) {
        console.error('error');
      }
    };
    getFilms();
  }, [movieId]);

  return (
    <>
      {author && author.length === 0 && (
        <p>"We don't have any reviews for this movie. Sorry..."</p>
      )}
      {author &&
        author.map(auth => (
          <ul key={auth.id}>
            <li>Author: {auth.author}</li>
            <li>Character:{auth.content}</li>
          </ul>
        ))}
    </>
  );
};

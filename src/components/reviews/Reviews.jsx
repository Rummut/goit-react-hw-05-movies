import { useEffect, useState } from 'react';
import { GetReviews } from 'components/api-request';
import { useParams } from 'react-router-dom';
import { ItemReview, SorryReview } from './Reviews.styled';

const Reviews = () => {
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
        <>
          <SorryReview>
            "We don't have any reviews for this movie. Sorry..."
          </SorryReview>
        </>
      )}
      {author &&
        author.map(auth => (
          <ItemReview key={auth.id}>
            <li>Author: {auth.author}</li>
            <li>Character: {auth.content}</li>
          </ItemReview>
        ))}
    </>
  );
};

export default Reviews;

import { Link } from 'react-router-dom';

export const Movie = () => {
  return (
    <main>
      <h1>Tranding film</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </main>
  );
};

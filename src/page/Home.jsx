import { FetchApi } from 'components/api-request';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { results } = await FetchApi();
        setFilms(results);
      } catch (error) {
        console.error('error');
      }
    };
    fetchFilms();
  }, []);
  return (
    <main>
      <h1>Trending week</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movie/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

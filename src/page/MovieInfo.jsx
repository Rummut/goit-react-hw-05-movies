import { FetchApi } from 'components/api-request';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const MovieInfo = () => {
  const { id } = useParams();
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
  const getFilmById = filmId => {
    return films.find(film => film.id === filmId);
  };

  const filmById = getFilmById(id);

  console.log(filmById);
  return (
    <main>
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

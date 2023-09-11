import { GetMovieDetails } from 'components/api-request';
import { MovieAbout } from 'components/movie-about/MovieAbout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './movies/Movies.styled';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getFilms = async () => {
      try {
        const response = await GetMovieDetails(movieId);
        setFilms(response);
      } catch (error) {
        console.error('error');
      }
    };
    getFilms();
  }, [movieId]);

  return <Container>{films && <MovieAbout aboutMovie={films} />}</Container>;
};

export default MovieInfo;

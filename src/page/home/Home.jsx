import { FetchApi } from 'components/api-request';
import { useEffect, useState } from 'react';
import { Container, Title } from './Home.styled';
import { MovieListPopular } from 'components/movie-list-popular/movieListPopular';

const Home = () => {
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
    <Container>
      <Title>Trending week</Title>
      <MovieListPopular films={films} />
    </Container>
  );
};

export default Home;

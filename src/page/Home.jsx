import { FetchApi } from 'components/api-request';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Items, List, Title } from './Home.styled';

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
      <Items>
        {films.map(film => (
          <li key={film.id}>
            <List to={`/movie/${film.id}`}>{film.title}</List>
          </li>
        ))}
      </Items>
    </Container>
  );
};

export default Home;

import { GetSearchMovie } from 'components/api-request';
import { FormSubmit } from 'components/form-submit/FormSubmit';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';
import { MovieList } from 'components/movie-list/MovieList';

const Movies = () => {
  const [querySearch, setQuerySearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  const inputQuery = searchParams.get('query');
  useEffect(() => {
    if (inputQuery === null) {
      return;
    }
    const fetchFilms = async () => {
      try {
        const { results } = await GetSearchMovie(inputQuery);
        setQuerySearch(results);
      } catch (error) {
        console.error('error');
      }
    };
    fetchFilms();
  }, [inputQuery]);

  return (
    <>
      <Container>
        <FormSubmit handleSubmit={handleSubmit} />
        {querySearch && (
          <MovieList querySearch={querySearch} location={location} />
        )}
      </Container>
    </>
  );
};

export default Movies;

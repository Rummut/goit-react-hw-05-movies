import { GetSearchMovie } from 'components/api-request';
import { FormSubmit } from 'components/form-submit/FormSubmit';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container, Items, List } from './MovieList.styled';

const MovieList = () => {
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
        <Items>
          {querySearch &&
            querySearch.map(listOfFilms => (
              <li key={listOfFilms.id}>
                <List
                  to={`/movie/${listOfFilms.id}`}
                  state={{ from: location }}
                >
                  {listOfFilms.title}
                </List>
              </li>
            ))}
        </Items>
      </Container>
    </>
  );
};

export default MovieList;

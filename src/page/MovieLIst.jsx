import { GetSearchMovie } from 'components/api-request';
import { FormSubmit } from 'components/form-submit/FormSubmit';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
      <FormSubmit handleSubmit={handleSubmit} />
      <ul>
        {querySearch &&
          querySearch.map(listOfFilms => (
            <li key={listOfFilms.id}>
              <Link to={`/movie/${listOfFilms.id}`} state={{ from: location }}>
                {listOfFilms.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;

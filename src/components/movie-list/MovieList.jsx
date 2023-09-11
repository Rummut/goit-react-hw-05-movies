import { Items, List } from './MovieList.styled';

export const MovieList = ({ querySearch, location }) => {
  return (
    <Items>
      {querySearch.map(listOfFilms => (
        <li key={listOfFilms.id}>
          <List to={`/movie/${listOfFilms.id}`} state={{ from: location }}>
            {listOfFilms.title}
          </List>
        </li>
      ))}
    </Items>
  );
};

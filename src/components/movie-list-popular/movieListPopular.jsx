import { Items, List } from './movieListPopular.styled';

export const MovieListPopular = ({ films }) => {
  return (
    <Items>
      {films.map(film => (
        <li key={film.id}>
          <List to={`/movie/${film.id}`}>{film.title}</List>
        </li>
      ))}
    </Items>
  );
};

import { Link, Outlet } from 'react-router-dom';

export const MovieAbout = ({ aboutMovie, movieId }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const genres = aboutMovie.genres;

  return (
    <>
      <h1>{aboutMovie.title}</h1>
      <img
        src={
          aboutMovie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${aboutMovie.poster_path}`
            : defaultImg
        }
        width={250}
        alt={aboutMovie.title}
      />
      <p>User Score:{}</p>
      <p>Overview: {aboutMovie.overview}</p>
      Genres:
      {genres.map(genre => (
        <ul key={genre.id}>
          <li>{genre.name}</li>
        </ul>
      ))}
      <ul>
        Additional Information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
};

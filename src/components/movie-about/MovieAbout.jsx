import { Link, Outlet, useLocation } from 'react-router-dom';

export const MovieAbout = ({ aboutMovie, movieId }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const genres = aboutMovie.genres;
  return (
    <>
      <Link to={backLinkHref}>Back to search</Link>
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
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
};

import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContainerAbout, ContainerList, ItemAbout } from './MovieAbout.styled';

export const MovieAbout = ({ aboutMovie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const genres = aboutMovie.genres;
  return (
    <>
      <Link to={backLinkHref}>Back to search</Link>
      <ContainerAbout>
        <img
          src={
            aboutMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${aboutMovie.poster_path}`
              : defaultImg
          }
          width={250}
          alt={aboutMovie.title}
        />{' '}
        <ContainerList>
          <h1>{aboutMovie.title}</h1>
          <ItemAbout>
            <li>Release Date: {aboutMovie.release_date}</li>
            <li>
              Country:{' '}
              {aboutMovie.production_countries.map(country => (
                <p key={country.name}>{country.name}</p>
              ))}
            </li>
            <li>Vote Average: {aboutMovie.vote_average}</li>
            <li>
              Genres:
              {genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </li>
            <li>Budget: {aboutMovie.budget} $</li>
          </ItemAbout>
        </ContainerList>
      </ContainerAbout>
      <p>Overview: {aboutMovie.overview}</p>
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

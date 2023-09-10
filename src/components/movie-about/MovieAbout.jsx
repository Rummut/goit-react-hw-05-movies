import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  AdditionalInfo,
  BackLink,
  ContainerAbout,
  ContainerList,
  ItemAbout,
  ListAbout,
  Overview,
  TitleAbout,
} from './MovieAbout.styled';

export const MovieAbout = ({ aboutMovie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const genres = aboutMovie.genres;
  return (
    <>
      <BackLink to={backLinkHref}>&#10229; Back to search</BackLink>
      <ContainerAbout>
        <img
          src={
            aboutMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${aboutMovie.poster_path}`
              : defaultImg
          }
          width={270}
          alt={aboutMovie.title}
        />{' '}
        <ContainerList>
          <TitleAbout>{aboutMovie.title}</TitleAbout>
          <ItemAbout>
            <li>Release Date: {aboutMovie.release_date}</li>
            <ListAbout>
              Country:{' '}
              {aboutMovie.production_countries.map(country => (
                <p key={country.name}>{country.name},</p>
              ))}
            </ListAbout>
            <li>Vote Average: {aboutMovie.vote_average}</li>
            <ListAbout>
              Genres:
              {genres.map(genre => (
                <p key={genre.id}>{genre.name},</p>
              ))}
            </ListAbout>
            <li>Budget: {aboutMovie.budget} $</li>
          </ItemAbout>
        </ContainerList>
      </ContainerAbout>
      <Overview>Overview: {aboutMovie.overview}</Overview>
      <AdditionalInfo>
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
      </AdditionalInfo>
    </>
  );
};

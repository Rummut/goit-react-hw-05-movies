import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './shared-layaut/SharedLayout';
import { Home } from 'page/Home';
import { MovieList } from 'page/MovieLIst';
import { Reviews } from './reviews/Reviews';
import { NotFound } from './not-found/Notfound';
import { MovieInfo } from 'page/MovieInfo';
import { Cast } from './cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<MovieList />} />
        <Route path="movie/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

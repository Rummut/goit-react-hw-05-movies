import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './shared-layaut/SharedLayout';
import { Home } from 'page/Home';
import { Movie } from 'page/Movie';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { NotFound } from './not-found/Notfound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

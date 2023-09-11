import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './shared-layout/SharedLayout.jsx';
import { lazy } from 'react';

const Home = lazy(() => import('../page/home/Home.jsx'));
const Movies = lazy(() => import('../page/movies/Movies.jsx'));
const MovieInfo = lazy(() => import('../page/MovieInfo'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews'));
const NotFound = lazy(() => import('../components/not-found/Notfound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

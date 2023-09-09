import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movie">Movie</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

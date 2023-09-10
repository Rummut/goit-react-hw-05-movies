import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-left: 100px;
`;

export const Items = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-size: 25px;
  list-style: none;
  margin-top: 20px;
`;

export const List = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:visited {
    color: purple;
  }

  &:hover {
    color: red;
  }
`;

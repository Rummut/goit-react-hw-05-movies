import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 30px 40px;
  height: 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 10px;
  margin-right: 40px;
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.21;
  padding: 0.5rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  width: auto;

  &.active {
    color: red;
  }

  &:hover {
    background-color: #2788c7;
  }
`;

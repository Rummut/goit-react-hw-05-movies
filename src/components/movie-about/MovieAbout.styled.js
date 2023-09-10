import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  margin-top: 20px;
  color: #fff;
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.21;
  padding: 0.5rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  width: auto;

  &:hover {
    color: red;
  }
`;

export const TitleAbout = styled.h1`
  margin-left: 100px;
  font-size: 40px;
`;

export const ItemAbout = styled.ul`
  margin: 20px 0 0 100px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  list-style: none;
`;

export const ListAbout = styled.li`
  display: flex;
  gap: 5px;
`;

export const Overview = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-top: 20px;
`;

export const AdditionalInfo = styled.ul`
  margin: 20px 0 0 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  list-style: none;
`;

import styled from 'styled-components';

export const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 7px;
  margin: 30px 30px 0 40px;
`;

export const Button = styled.button`
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

import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgrey;
  }
`;

export const Mark = styled.div`
  display: flex;
  background-color: ${({ average }) => (average < 3 ? 'red' : 'green')};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
`;

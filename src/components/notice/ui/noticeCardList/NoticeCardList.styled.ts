import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 32px;

  @media (max-width: 744px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 16px;
  }
`;

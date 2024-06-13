import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: grid;
  column-gap: 20px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  grid-column: span 3;
`;

export const ButtonCotainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonWrap = styled.div`
  width: 336px;
`;

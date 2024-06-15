import styled from 'styled-components';

export const PostListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 28px;
  grid-column-gap: 14px;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 744px) {
    grid-template-columns: 195px 195px;
    gap: 9px;
  }
`;

import styled from 'styled-components';

export const PostPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 744px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PostPrice = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.48px;

  @media (max-width: 744px) {
    font-size: 18px;
  }
`;

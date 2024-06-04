import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  status: 'closed' | 'expired' | 'active';
}

export const PostPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PostPrice = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.48px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PostPriceChange = styled.div<PostContainerProps>`
  display: flex;
  height: 36px;
  padding: 12px;
  align-items: center;
  gap: 3px;
  color: #fff;
  border-radius: 20px;
  background-color: ${theme.Colors.Red[40]};
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  ${({ status }) =>
    (status === 'closed' || status === 'expired') &&
    css`
      background-color: ${theme.Colors.Gray[20]};
    `}

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 0;
    background-color: #fff;
    color: ${theme.Colors.Red[40]};
    font-size: 14px;
    font-weight: 400;
    ${({ status }) =>
      (status === 'closed' || status === 'expired') &&
      css`
        color: ${theme.Colors.Gray[20]};
      `}
  }
`;

export const PostPriceChangeImage = styled.div`
  img {
    width: 15px;
    height: 15px;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }
`;

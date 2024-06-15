import theme from '@/shared/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  status: 'closed' | 'expired' | 'active';
}

export const PostPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (max-width: 744px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PostPrice = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 744px) {
    font-size: 18px;
  }
`;

export const PostPriceChange = styled.div<PostContainerProps>`
  display: flex;
  width: 100%;
  height: 36px;
  padding: 12px 30px 12px 12px;
  align-items: center;
  gap: 3px;
  color: #fff;
  border-radius: 20px;
  background-color: ${theme.Colors.Red[40]};
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  background-image: url('/arrow-up-white.svg');
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: top 9px right 10px;
  ${({ status }) =>
    (status === 'closed' || status === 'expired') &&
    css`
      background-color: ${theme.Colors.Gray[20]};
    `}
  @media
    (max-width: 744px) {
    border-radius: 0;
    padding: 0 16px 0 0;
    background-color: #fff;
    color: ${theme.Colors.Red[40]};
    font-size: 14px;
    font-weight: 400;
    background-image: url('/arrow-up-red.svg');
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: top 8px right -2px;
    ${({ status }) =>
      (status === 'closed' || status === 'expired') &&
      css`
        background-image: url('/arrow-up-gray.svg');
        color: ${theme.Colors.Gray[20]};
      `}
  }
`;

export const PostPriceChangeImage = styled.div`
  img {
    width: 15px;
    height: 15px;

    @media (max-width: 744px) {
      width: 8px;
      height: 8px;
    }
  }
`;

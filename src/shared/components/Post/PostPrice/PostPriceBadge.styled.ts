import theme from '@/shared/styles/theme';
import styled, { css } from 'styled-components';

interface Props {
  isClosed: boolean;
  determineColor: 'red40' | 'red30';
}

export const PostPriceChange = styled.div<Props>`
  width: 168px;
  display: flex;
  padding: 10px 8px;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #fff;
  border-radius: 20px;
  background-color: ${theme.Colors.Red[40]};
  ${({ determineColor }) =>
    determineColor === 'red30' &&
    css`
      background-color: ${theme.Colors.Red[30]};
    `}
  font-size: 14px;
  font-weight: 500;
  ${({ isClosed }) =>
    isClosed === true &&
    css`
      background-color: ${theme.Colors.Gray[20]};
    `}
  @media
    (max-width: 744px) {
    width: auto;
    border-radius: 0;
    padding: 0 16px 0 0;
    background-color: #fff;
    color: ${theme.Colors.Red[40]};
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    ${({ isClosed }) =>
      isClosed === true &&
      css`
        color: ${theme.Colors.Gray[20]};
      `}
    ${({ determineColor }) =>
      determineColor === 'red30' &&
      css`
        color: ${theme.Colors.Red[30]};
      `}
  }
`;

export const PostPriceArrow = styled.div`
  font-size: 14px;
  @media (max-width: 744px) {
    font-size: 10px;
  }
`;

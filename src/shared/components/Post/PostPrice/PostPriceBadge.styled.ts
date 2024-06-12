import theme from '@/shared/styles/theme';
import styled, { css } from 'styled-components';

interface Props {
  isClosed: boolean;
}

export const PostPriceChange = styled.div<Props>`
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
  ${({ isClosed }) =>
    isClosed === true &&
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
    ${({ isClosed }) =>
      isClosed === true &&
      css`
        color: ${theme.Colors.Gray[20]};
      `}
  }
`;

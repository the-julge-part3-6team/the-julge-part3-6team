import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  isClosed: boolean;
}

export const PostInform = styled.div<PostContainerProps>`
  display: flex;
  gap: 8px;
  color: ${theme.Colors.Gray[50]};
  font-size: 14px;
  line-height: 22px;

  ${({ isClosed }) =>
    isClosed === true &&
    css`
      color: ${theme.Colors.Gray[30]};
    `}

  @media (max-width: 744px) {
    font-size: 12px;
  }
`;

export const PostInformImage = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 744px) {
      width: 16px;
      height: 16px;
    }
  }
`;

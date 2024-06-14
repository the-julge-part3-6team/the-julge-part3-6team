import theme from '@/shared/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  isClosed: boolean;
}

export const PostContainer = styled.div<PostContainerProps>`
  cursor: pointer;
  background-color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${theme.Colors.Gray[20]};
  width: 100%;
  gap: 20px;
  ${({ isClosed }) =>
    isClosed === true &&
    css`
      color: ${theme.Colors.Gray[30]};
    `}
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const PostTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 744px) {
    font-size: 16px;
  }
`;

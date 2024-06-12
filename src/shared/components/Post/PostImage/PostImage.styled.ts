import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  isClosed: boolean;
}

export const PostImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

export const PostImage = styled.div<PostContainerProps>`
  width: 100%;
  overflow: hidden;
  height: 200px; /* 기본값 200px || props 받는 걸로 수정 */

  ${({ isClosed }) =>
    isClosed === true &&
    css`
      filter: brightness(0.3);
    `}

  @media (max-width: 744px) {
    height: 100px;
  }
`;

export const PostStatusLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.Colors.Gray[30]};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;

  @media (max-width: 744px) {
    font-size: 20px;
  }
`;

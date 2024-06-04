import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  status: 'closed' | 'expired' | 'active';
}

export const PostInform = styled.div<PostContainerProps>`
  display: flex;
  gap: 8px;
  color: ${theme.Colors.Gray[50]};
  font-size: 14px;
  line-height: 22px;

  ${({ status }) =>
    (status === 'closed' || status === 'expired') &&
    css`
      color: ${theme.Colors.Gray[30]};
    `}

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PostInformImage = styled.div`
  img {
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;

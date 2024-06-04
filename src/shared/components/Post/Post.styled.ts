import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PostContainerProps {
  status: 'closed' | 'expired' | 'active';
}

export const PostContainer = styled.div<PostContainerProps>`
  background-color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${theme.Colors.Gray[20]};
  width: 100%;
  gap: 20px;
  ${({ status }) =>
    (status === 'closed' || status === 'expired') &&
    css`
      color: ${theme.Colors.Gray[30]};
    `}
`;

export const PostImageContainer = styled.div`
  position: relative;
`;

export const PostImage = styled.div<PostContainerProps>`
  width: 100%;
  overflow: hidden;
  height: 200px;
  border-radius: 12px;

  ${({ status }) =>
    (status === 'closed' || status === 'expired') &&
    css`
      filter: brightness(0.3);
    `}

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const StatusLabel = styled.div`
  position: absolute;
  top: 45%;
  right: 40%;
  color: ${theme.Colors.Gray[30]};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PostInform = styled.div<PostContainerProps>`
  display: flex;
  gap: 6px;
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
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;

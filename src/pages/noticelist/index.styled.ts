import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const ContainerBackground = styled.div`
  width: 100%;
  background-color: ${theme.Colors.Red[10]};
  padding: 1px;
`;

export const Container = styled.div`
  width: 964px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 1040px) {
    width: auto;
    padding: 0 32px;
  }

  @media (max-width: 744px) {
    width: auto;
    padding: 0 12px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const CustomTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 32px;
  @media (max-width: 744px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const PostListWrap = styled.div`
  margin: 0 auto 40px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
`;

export const FilterButton = styled.button`
  display: flex;
  height: 30px;
  padding: 12px;
  align-items: center;
  gap: 6px;
  border-radius: 5px;
  background-color: ${theme.Colors.Red[30]};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 744px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`;

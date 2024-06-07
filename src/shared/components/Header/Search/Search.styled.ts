import theme from '@/styles/theme';
import styled from 'styled-components';
import searchIco from '../../../../../public/search.svg';

export const InputContainer = styled.div`
  width: 450px;

  @media (max-width: 1440px) {
    width: auto;
  }

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  margin: 0;
  box-sizing: border-box;
  background: ${theme.Colors.Gray[10]} url(${searchIco.src}) no-repeat center
    left 10px;
  border: none;
  font-size: 14px;
  line-height: 1.57143;
  font-weight: 400;
  border-radius: 10px;

  @media (max-width: 744px) {
    margin: 16px 0 0;
    padding: 8px 8px 8px 32px;
    background-size: 16px;
    font-size: 12px;
  }
`;

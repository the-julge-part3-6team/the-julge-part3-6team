import theme from '@/styles/theme';
import styled from 'styled-components';

export const AddImageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  margin: 18px 0px 24px;
`;

export const Label = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const AddProfileContainer = styled.div`
  position: relative;
  width: 50%;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;

  border-radius: 5px;
  border: 1px solid ${theme.Colors.Gray[30]};
  background: ${theme.Colors.Gray[10]};

  cursor: pointer;

  label {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }

  p {
    color: ${theme.Colors.Gray[40]};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
`;

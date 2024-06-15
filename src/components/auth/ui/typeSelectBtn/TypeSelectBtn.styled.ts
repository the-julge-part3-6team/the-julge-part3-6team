import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

export const RadioLabel = styled.label`
  text-align: center;
  width: 100%;
  padding: 13px 41px;
  color: ${theme.Colors.Black};
  border-radius: 30px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);

  font-size: 14px;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid ${theme.Colors.Gray[30]};
  }

  ${RadioInput}:checked + & {
    border: 1px solid ${theme.Colors.Red[50]};

    &::before {
      content: '';
      background: ${theme.Colors.Red[50]} url('/checkIcon.svg') no-repeat center
        center;

      background-size: cover;
      border: 1px solid ${theme.Colors.Red[50]};
    }
  }
`;

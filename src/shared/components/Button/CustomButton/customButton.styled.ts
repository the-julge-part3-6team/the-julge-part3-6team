import theme from '@/shared/styles/theme';
import styled from 'styled-components';

interface CustomButtonProps {
  $color: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: c enter;
  padding: 14px 20px;
  width: 100%;

  border: ${props => `1px solid ${props.$color}`};
  border-radius: 6px;
  background-color: ${theme.Colors.White};
  color: ${props => props.$color};
`;

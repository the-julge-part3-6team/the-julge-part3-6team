import theme from '@/shared/styles/theme';
import { styled } from 'styled-components';

export interface BadgeStyled {
  $status: '거절' | '대기중' | '승인 완료';
}
const config = {
  거절: { background: theme.Colors.Red[10], color: theme.Colors.Red[40] },
  대기중: { background: theme.Colors.Green[10], color: theme.Colors.Green[20] },
  '승인 완료': {
    background: theme.Colors.Blue[10],
    color: theme.Colors.Blue[20],
  },
};

export const Badge = styled.span<BadgeStyled>`
  text-align: center;
  padding: 6px 10px;
  width: 75px;
  font-size: 14px;

  border-radius: 20px;
  color: ${props => config[props.$status]['color']};
  background: ${props => config[props.$status]['background']};

  @media (max-width: 744px) {
    font-size: 12px;
    width: 67px;
  }
`;

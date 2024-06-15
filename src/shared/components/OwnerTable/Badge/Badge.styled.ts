import theme from '@/shared/styles/theme';
import { styled } from 'styled-components';

export interface BadgeStyled {
  $status: 'rejected' | 'pending' | 'accepted' | 'canceled';
}
const config = {
  rejected: { background: theme.Colors.Red[10], color: theme.Colors.Red[40] },
  canceled: { background: theme.Colors.Red[10], color: theme.Colors.Red[40] }, // 유저가 취소
  pending: {
    background: theme.Colors.Green[10],
    color: theme.Colors.Green[20],
  },
  accepted: {
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

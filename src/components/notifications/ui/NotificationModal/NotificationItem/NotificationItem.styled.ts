import styled from 'styled-components';
import theme from '@/styles/theme';

export const NotificationItemContainer = styled.div`
  padding: 16px 12px;
  width: 328px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${theme.Colors.Gray[20]};
  margin-top: 8px;
  box-sizing: border-box;
`;

export const NotificationItemContent = styled.div`
  font-size: 14px;
  line-height: 22px;
`;

export const NotificationItemTime = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.Colors.Gray[40]};
`;

export const NotificationItemStatusText = styled.span<{
  status: 'approved' | 'rejected';
}>`
  color: ${props =>
    props.status === 'approved' ? theme.Colors.Blue[20] : theme.Colors.Red[40]};
`;

export const Dot = styled.span<{ status: 'approved' | 'rejected' }>`
  height: 5px;
  width: 5px;
  background-color: ${props =>
    props.status === 'approved' ? theme.Colors.Blue[20] : theme.Colors.Red[40]};
  border-radius: 50%;
`;

import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const LocationList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  border: 1px solid ${theme.Colors.Gray[20]};
  padding: 20px;
  border-radius: 6px;
  height: 258px;
  margin-bottom: 12px;
`;

export const LocationItem = styled.button`
  text-align: left;
  padding: 10px 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SelectedLocation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.button`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  background-color: ${theme.Colors.Red[10]};
  color: ${theme.Colors.Red[40]};
  font-size: 14px;
  font-weight: 700;
`;

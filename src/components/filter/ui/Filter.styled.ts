import theme from '@/shared/styles/theme';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const FilterContainer = styled.div`
  position: absolute;
  top: 25px;
  right: -25px;
  margin: 24px;
  background: #fff;
  border-radius: 10px;
  padding: 24px 20px;
  width: 390px;
  border: 1px solid ${theme.Colors.Gray[20]};
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const FilterHeader = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  height: 2px;
  margin: 30px 0;
  background-color: #f2f2f3;
`;

export const SectionTitle = styled.h3`
  line-height: 26px;
  margin-bottom: 12px;
`;

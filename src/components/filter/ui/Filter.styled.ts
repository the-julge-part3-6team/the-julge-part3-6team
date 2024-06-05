import theme from '@/styles/theme';
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

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  height: 2px;
  margin: 30px 0;
  background-color: #f2f2f3;
`;
export const Section = styled.div``;

export const SectionTitle = styled.h3`
  line-height: 26px;
  margin-bottom: 12px;
`;

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

export const CustomDatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 16px 20px;
    border-radius: 5px;
    border: 1px solid #cbc9cf;
    background: #fff;
    height: 58px;
    font-size: 16px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PriceInputWrapper = styled.div`
  position: relative;
  width: 175px;
`;

export const PriceInput = styled.input`
  width: 169px;
  padding: 16px 50px 16px 20px;
  border-radius: 6px;
  border: 1px solid ${theme.Colors.Gray[30]};
  box-sizing: border-box;
`;

export const Currency = styled.span`
  position: absolute;
  right: 20px;
  top: 35%;
`;

export const PriceText = styled.span`
  margin-top: 30px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 8px;
`;

export const ResetButton = styled.button`
  width: auto;
`;

export const ApplyButton = styled.button`
  width: 260px;
`;

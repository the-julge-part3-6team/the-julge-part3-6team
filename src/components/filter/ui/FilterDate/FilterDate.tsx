import * as S from './FilterDate.styled';
import DatePicker from 'react-datepicker';

interface Props {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
}

const FilterDate = ({ startDate, setStartDate }: Props) => {
  return (
    <>
      <S.CustomDatePickerWrapper>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          placeholderText="입력"
          dateFormat="yyyy.MM.dd"
        />
      </S.CustomDatePickerWrapper>
    </>
  );
};

export default FilterDate;

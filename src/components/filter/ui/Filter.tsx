import * as S from './Filter.styled';
import Image from 'next/image';
import closeImg from '@/assets/close.svg';
import { useState } from 'react';
import { useModal } from '@/shared/store/useModal';
import DatePicker from 'react-datepicker';
import { FilterState } from '@/types/filterState';
import { locations } from '../constant/locations';

interface Props {
  modalKey: string;
  onApply: (filters: FilterState) => void;
}

const Filter = ({ modalKey, onApply }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const onChangeStartDate = (date: Date | null) => {
    setStartDate(date);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(loc => loc !== location)
        : [...prev, location],
    );
  };

  const removeSelectedLocation = (selectedLocation: string) => {
    setSelectedLocations(prev => prev.filter(loc => loc !== selectedLocation));
  };

  const resetFilters = () => {
    setStartDate(null);
    setPrice(0);
    setSelectedLocations([]);
  };

  const applyFilters = () => {
    const filters: FilterState = {
      startDate,
      price,
      selectedLocations,
    };
    onApply(filters);
  };

  return (
    <>
      {isOpen && isSelected && (
        <S.FilterContainer>
          <S.Header>상세 필터</S.Header>
          <S.Section>
            <S.SectionTitle>위치</S.SectionTitle>
            <S.LocationList>
              {locations.map((location, index) => (
                <S.LocationItem
                  key={index}
                  onClick={() => toggleLocation(location)}
                >
                  {location}
                </S.LocationItem>
              ))}
            </S.LocationList>
            <S.SelectedLocation>
              {selectedLocations.map((selectedLocation, index) => (
                <S.Tag
                  key={index}
                  onClick={() => removeSelectedLocation(selectedLocation)}
                >
                  {selectedLocation} <Image src={closeImg} alt="닫기 버튼" />
                </S.Tag>
              ))}
            </S.SelectedLocation>
          </S.Section>
          <S.Divider />
          <S.Section>
            <S.SectionTitle>시작일</S.SectionTitle>
            <S.CustomDatePickerWrapper>
              <DatePicker
                selected={startDate}
                onChange={onChangeStartDate}
                placeholderText="입력"
                dateFormat="yyyy.MM.dd"
              />
            </S.CustomDatePickerWrapper>
          </S.Section>
          <S.Divider />
          <S.Section>
            <S.SectionTitle>금액</S.SectionTitle>
            <S.PriceWrapper>
              <S.PriceInputWrapper>
                <S.PriceInput
                  value={price}
                  placeholder="입력"
                  type="number"
                  onChange={onChangePrice}
                />
                <S.Currency>원</S.Currency>
              </S.PriceInputWrapper>
              <S.PriceText>이상부터</S.PriceText>
            </S.PriceWrapper>
          </S.Section>
          <S.ButtonContainer>
            <S.ResetButton onClick={resetFilters}>초기화</S.ResetButton>
            <S.ApplyButton onClick={applyFilters}>적용하기</S.ApplyButton>
          </S.ButtonContainer>
        </S.FilterContainer>
      )}
    </>
  );
};

export default Filter;

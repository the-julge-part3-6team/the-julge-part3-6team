import * as S from './Filter.styled';
import Image from 'next/image';
import closeImg from '@/assets/close.svg';
import { useState } from 'react';
import { useModal } from '@/shared/store/useModal';
import DatePicker from 'react-datepicker';

const locations: string[] = [
  '서울시 강남구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 송파구',
  '서울시 강동구',
];

interface Props {
  modalKey: string;
}

const Filter = ({ modalKey }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [price, setPrice] = useState<number>();
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
            <S.ApplyButton>적용하기</S.ApplyButton>
          </S.ButtonContainer>
        </S.FilterContainer>
      )}
    </>
  );
};

export default Filter;

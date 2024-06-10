import * as S from './Filter.styled';
import { useModal } from '@/shared/store/useModal';
import { FilterState } from '@/shared/types/filterState';
import { useFilterStore } from '@/shared/store/useFilterStore';
import FilterLocation from './FilterLocation/FilterLocation';
import FilterDate from './FilterDate/FilterDate';
import FilterPrice from './FilterPrice/FilterPrice';
import FilterButton from './FilterButton/FilterButton';

interface Props {
  modalKey: string;
  onApply: (filters: FilterState) => void;
}

const Filter = ({ modalKey, onApply }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  const {
    startDate,
    setStartDate,
    price,
    setPrice,
    selectedLocations,
    toggleLocation,
    removeLocation,
    resetFilters,
  } = useFilterStore();

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
          <S.SectionTitle>위치</S.SectionTitle>
          <FilterLocation
            selectedLocations={selectedLocations}
            toggleLocation={toggleLocation}
            removeLocation={removeLocation}
          />
          <S.Divider />
          <S.SectionTitle>시작일</S.SectionTitle>
          <FilterDate startDate={startDate} setStartDate={setStartDate} />
          <S.Divider />
          <FilterPrice price={price} setPrice={setPrice} />
          <FilterButton
            resetFilters={resetFilters}
            applyFilters={applyFilters}
          />
        </S.FilterContainer>
      )}
    </>
  );
};

export default Filter;

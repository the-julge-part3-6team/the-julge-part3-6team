import { locations } from '../../constant/locations';
import * as S from './FilterLocation.styled';
import closeImg from '@/assets/close.svg';
import Image from 'next/image';

interface Props {
  selectedLocations: string[];
  toggleLocation: (location: string) => void;
  removeLocation: (location: string) => void;
}

const FilterLocation = ({
  selectedLocations,
  toggleLocation,
  removeLocation,
}: Props) => {
  return (
    <>
      <S.LocationList>
        {locations.map((location, index) => (
          <S.LocationItem key={index} onClick={() => toggleLocation(location)}>
            {location}
          </S.LocationItem>
        ))}
      </S.LocationList>
      <S.SelectedLocation>
        {selectedLocations.map((selectedLocation, index) => (
          <S.Tag key={index} onClick={() => removeLocation(selectedLocation)}>
            {selectedLocation} <Image src={closeImg} alt="닫기 버튼" />
          </S.Tag>
        ))}
      </S.SelectedLocation>
    </>
  );
};

export default FilterLocation;

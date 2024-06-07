import * as S from './FilterPrice.styled';
import Input from '@/shared/components/Input/Input';

interface Props {
  price: string;
  setPrice: (price: string) => void;
}

const FilterPrice = ({ price, setPrice }: Props) => {
  return (
    <S.PriceWrapper>
      <S.PriceInputWrapper>
        <Input
          inputType="text"
          label="금액"
          type="hourlyWage"
          placeholder="입력"
          onChange={e => setPrice(e.target.value)}
          value={price}
        />
      </S.PriceInputWrapper>
      <S.PriceText>이상부터</S.PriceText>
    </S.PriceWrapper>
  );
};

export default FilterPrice;

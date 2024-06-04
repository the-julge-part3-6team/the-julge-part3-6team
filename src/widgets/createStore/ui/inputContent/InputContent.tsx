import Input from '@/shared/components/Input/Input';
import * as S from './InputContent.styled';
import { locations } from '@/components/filter/constant/locations';
import { storeTypes } from '@/components/filter/constant/storeTypes';

export const InputContent = () => {
  return (
    <S.ContentLayout>
      <Input
        label="가게 이름*"
        placeholder="입력"
        inputType="text"
        type="basic"
      />
      <Input
        label="분류*"
        placeholder="선택"
        inputType="text"
        type="dropdown"
        options={storeTypes}
      />
      <Input
        label="주소*"
        placeholder="선택"
        type="dropdown"
        inputType="text"
        options={locations}
      />
      <Input
        label="상세주소*"
        placeholder="입력"
        type="basic"
        inputType="text"
      />
      <Input
        label="기본시급*"
        placeholder="입력"
        inputType="text"
        type="hourlyWage"
      />
    </S.ContentLayout>
  );
};

export default InputContent;

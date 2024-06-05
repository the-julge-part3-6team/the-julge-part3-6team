import Input from '@/shared/components/Input/Input';
import * as S from './InputContent.styled';
import { locations } from '@/components/filter/constant/locations';
import { storeTypes } from '@/components/filter/constant/storeTypes';
import { ChangeEvent } from 'react';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useHandleChangeValue } from '../../model/useHandleChangeValue';

export const InputContent = () => {
  const {
    setStoreName,
    setStoreType,
    setStoreAddress,
    setStoreAddressDetail,
    setPay,
  } = useAddStoreState();

  const action: { [key: string]: Function } = {
    storeName: setStoreName,
    storeAddressDetail: setStoreAddressDetail,
    pay: setPay,
  };

  return (
    <S.ContentLayout>
      <Input
        id="storeName"
        label="가게 이름*"
        placeholder="입력"
        inputType="text"
        type="basic"
        onChange={e => useHandleChangeValue(e, action)}
      />
      <Input
        id="storeType"
        label="분류*"
        placeholder="선택"
        inputType="text"
        type="dropdown"
        options={storeTypes}
        onChange={e => useHandleChangeValue(e, action)}
        onClick={(option: string) => setStoreType(option)}
      />
      <Input
        id="storeAddress"
        label="주소*"
        placeholder="선택"
        type="dropdown"
        inputType="text"
        options={locations}
        onChange={e => useHandleChangeValue(e, action)}
        onClick={(option: string) => setStoreAddress(option)}
      />
      <Input
        id="storeAddressDetail"
        label="상세주소*"
        placeholder="입력"
        type="basic"
        inputType="text"
        onChange={e => useHandleChangeValue(e, action)}
      />
      <Input
        id="pay"
        label="기본시급*"
        placeholder="입력"
        inputType="text"
        type="hourlyWage"
        onChange={e => useHandleChangeValue(e, action)}
      />
    </S.ContentLayout>
  );
};

export default InputContent;

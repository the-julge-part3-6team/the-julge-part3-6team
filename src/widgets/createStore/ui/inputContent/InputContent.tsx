import Input from '@/shared/components/Input/Input';
import * as S from './InputContent.styled';
import { locations } from '@/components/filter/constant/locations';
import { storeTypes } from '@/components/filter/constant/storeTypes';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useHandleChangeValue } from '../../../../models/store/useHandleChangeValue';
import { AddStoreImage } from '@/components/store';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { handleSubmit } from '@/models/store/createStoreSubmit';
import { useState } from 'react';
import { STORE_FORM_ERRORS_INITIAL_VALUE } from '@/constant/store';
import { mutateAddStore } from '@/models/store/mutateAddStore';
import { useModal } from '@/shared/store/useModal';

export const InputContent = () => {
  const {
    id,
    imageUrl,
    name,
    category,
    address1,
    address2,
    originalHourlyPay,
    description,
    setStoreName,
    setStoreType,
    setStoreAddress,
    setStoreAddressDetail,
    setPay,
    setStoreDescription,
  } = useAddStoreState();
  const [errors, setErrors] = useState(STORE_FORM_ERRORS_INITIAL_VALUE);
  const { setIsOpen } = useModal();
  const { mutate } = mutateAddStore(setIsOpen);
  const action: { [key: string]: Function } = {
    storeName: setStoreName,
    storeAddressDetail: setStoreAddressDetail,
    pay: setPay,
  };

  return (
    <>
      <S.ContentLayout>
        <Input
          id="storeName"
          label="가게 이름*"
          placeholder="입력"
          inputType="text"
          type="basic"
          value={name}
          onChange={e => useHandleChangeValue(e, action)}
          error={errors.name}
        />
        <Input
          id="storeType"
          label="분류*"
          placeholder="선택"
          inputType="text"
          type="dropdown"
          options={storeTypes}
          value={category}
          onChange={e => useHandleChangeValue(e, action)}
          onClick={(option: string) => setStoreType(option)}
          error={errors.category}
        />
        <Input
          id="storeAddress"
          label="주소*"
          placeholder="선택"
          type="dropdown"
          inputType="text"
          value={address1}
          options={locations}
          onChange={e => useHandleChangeValue(e, action)}
          onClick={(option: string) => setStoreAddress(option)}
          error={errors.address1}
        />
        <Input
          id="storeAddressDetail"
          label="상세주소*"
          placeholder="입력"
          type="basic"
          value={address2}
          inputType="text"
          onChange={e => useHandleChangeValue(e, action)}
          error={errors.address2}
        />
        <Input
          id="pay"
          label="기본시급*"
          placeholder="입력"
          inputType="text"
          type="hourlyWage"
          value={String(originalHourlyPay)}
          onChange={e => useHandleChangeValue(e, action)}
          error={errors.originalHourlyPay}
        />
      </S.ContentLayout>
      <AddStoreImage />
      <Textarea
        placeholder="입력"
        name="test"
        onChange={e => setStoreDescription(e.target.value)}
        value={description}
        label="가게 설명"
        id="1"
      />
      <RedButton
        text="등록하기"
        onClick={() =>
          handleSubmit(
            {
              id,
              name,
              category,
              address1,
              address2,
              originalHourlyPay,
              imageUrl,
              description,
            },
            setErrors,
            mutate,
          )
        }
      />
    </>
  );
};

export default InputContent;

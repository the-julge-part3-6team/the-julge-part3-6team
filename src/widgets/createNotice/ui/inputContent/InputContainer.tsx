import Input from '@/shared/components/Input/Input';
import * as S from './InputContent.styled';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
  notice: CreateNotice;
  setNotice: any;
  errors: any;
}

export const InputContent = ({ notice, errors, setNotice }: Props) => {
  return (
    <S.Layout>
      <Input
        label="시급*"
        id="hourlyPay"
        type="hourlyWage"
        // error={errors.hourlyPay}
        value={String(notice.hourlyPay)}
        placeholder="0"
        inputType="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNotice((prev: CreateNotice) => {
            return {
              ...prev,
              ['hourlyPay']: e.target.value,
            };
          })
        }
      />
      <Input
        label="시작 일시*"
        id="startsAt"
        type="basic"
        // error={errors.startsAt}
        value={notice.startsAt}
        placeholder="2024-01-05 15:00"
        inputType="datetime-local"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNotice((prev: CreateNotice) => {
            return {
              ...prev,
              ['startsAt']: e.target.value,
            };
          })
        }
      />
      <Input
        label="업무 시간*"
        id="workHour"
        type="basic"
        // error={errors.workHour}
        value={String(notice.workhour)}
        placeholder="0"
        inputType="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNotice((prev: CreateNotice) => {
            return {
              ...prev,
              ['workhour']: e.target.value,
            };
          })
        }
      />
      <S.Description>
        <Textarea
          id="description"
          name="description"
          placeholder="입력"
          label="공고 설명"
          value={notice.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setNotice((prev: CreateNotice) => {
              return {
                ...prev,
                ['description']: e.target.value,
              };
            })
          }
        />
      </S.Description>
    </S.Layout>
  );
};

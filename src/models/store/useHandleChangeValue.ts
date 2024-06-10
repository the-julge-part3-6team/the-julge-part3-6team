import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { ChangeEvent } from 'react';

export const useHandleChangeValue = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  action: { [key: string]: Function },
) => {
  const zustandAction = action[e.target.id];
  zustandAction(e.target.value);
};

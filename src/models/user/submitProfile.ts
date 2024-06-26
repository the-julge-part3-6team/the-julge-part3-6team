import { Dispatch, SetStateAction } from 'react';
import { isValidData } from './isValidDate';
import { UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import { UseMutateFunction } from '@tanstack/react-query';

interface Props {
  e: React.FormEvent<HTMLFormElement>;
  formData: ProfileUserData;
  setError: Dispatch<SetStateAction<UserFromErrors>>;
  mutate: UseMutateFunction<unknown, AxiosError, ProfileUserData, unknown>;
}

export const submitProfile = ({ e, formData, setError, mutate }: Props) => {
  e.preventDefault();

  const isValid = isValidData(formData, setError);
  if (isValid) mutate(formData);
};

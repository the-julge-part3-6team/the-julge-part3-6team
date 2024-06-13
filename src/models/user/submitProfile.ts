import { Dispatch, SetStateAction } from 'react';
import { isValidData } from './isValidDate';
import { UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';

interface Props {
  e: React.FormEvent<HTMLFormElement>;
  formData: ProfileUserData;
  setError: Dispatch<SetStateAction<UserFromErrors>>;
  result: UseMutationResult<unknown, AxiosError, ProfileUserData, unknown>;
}

export const submitProfile = ({ e, formData, setError, result }: Props) => {
  e.preventDefault();

  const isValid = isValidData(formData, setError);
  if (isValid) result.mutate(formData);
};

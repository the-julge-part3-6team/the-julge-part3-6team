import { ChangeEvent } from 'react';

interface Props {
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
  setBio: (bio: string) => void;
}

export const onChangeValue = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  { setName, setPhone, setAddress, setBio }: Props,
) => {
  const action: { [key: string]: Function } = {
    name: setName,
    phone: setPhone,
    address: setAddress,
    bio: setBio,
  };
  const zustandAction = action[e.target.id];
  zustandAction(e.target.value);
};

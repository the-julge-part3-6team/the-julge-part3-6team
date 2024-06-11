import { ClipLoader } from 'react-spinners';

export const renderSpinner = (
  component: React.ReactElement,
  isLoading: boolean,
) => {
  if (isLoading) {
    return <ClipLoader size={50} color="#EA3C12" />;
  } else {
    return component;
  }
};

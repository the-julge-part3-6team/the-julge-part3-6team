import { ClipLoader } from 'react-spinners';

export const renderSpinner = (
  component: React.ReactElement,
  isLoading: boolean,
) => {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0 0' }}>
        <ClipLoader size={50} color="#EA3C12" />
      </div>
    );
  } else {
    return component;
  }
};

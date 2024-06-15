import { NotfoundStore, StoreCard } from '@/components/store';
import { renderSpinner } from '@/shared/utils/renderSpinner';

interface Props {
  store: Store;
  isLoading: boolean;
}

export const StoreContent = ({ store, isLoading }: Props) => {
  const storeContent = store ? (
    <StoreCard
      shop_id={store.id}
      imageUrl={store.imageUrl}
      name={store.name}
      address={store.address1}
      description={store.description}
    />
  ) : (
    <NotfoundStore />
  );

  return <>{renderSpinner(storeContent, isLoading)}</>;
};

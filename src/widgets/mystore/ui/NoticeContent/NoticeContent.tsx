import { NotFoundNotice, NoticeCardList } from '@/components/notice';
import { useGetNoticeByStoreId } from '@/models/notice/useGetNoticeByStoreId';
import { renderSpinner } from '@/shared/utils/renderSpinner';

interface Props {
  store: Store;
}

export const NoticeContent = ({ store }: Props) => {
  const { data, isError, isLoading } = useGetNoticeByStoreId(store?.id);

  const noticeList = data?.data.items;
  const noticeContent = noticeList ? (
    <NoticeCardList noticeList={noticeList} storeName={store?.name} />
  ) : (
    <NotFoundNotice shop_id={store?.id} />
  );

  return <>{renderSpinner(noticeContent, isLoading)}</>;
};

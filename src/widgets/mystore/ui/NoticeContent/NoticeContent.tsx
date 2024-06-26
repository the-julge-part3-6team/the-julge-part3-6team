import { NotFoundNotice, NoticeCardList } from '@/components/notice';
import { useGetNoticeByStoreId } from '@/models/notice/useGetNoticeByStoreId';
import { observerByScroll } from '@/shared/utils/observerByScroll';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { useRef } from 'react';

interface Props {
  store: Store;
}

export const NoticeContent = ({ store }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isFetching, fetchNextPage } = useGetNoticeByStoreId(
    store?.id,
  );

  observerByScroll({
    isLoading,
    ref: divRef,
    fetchNextPage,
  });

  const noticeContent = data?.pages ? (
    <>
      <NoticeCardList noticeList={data.pages} store={store} />
      <div ref={divRef} style={{ height: '0.1px', width: '100%' }} />
    </>
  ) : (
    <NotFoundNotice shop_id={store?.id} />
  );

  return renderSpinner(noticeContent, isLoading && !isFetching);
};

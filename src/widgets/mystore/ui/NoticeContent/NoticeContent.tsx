import { NotFoundNotice, NoticeCardList } from '@/components/notice';
import { useGetNoticeByStoreId } from '@/models/notice/useGetNoticeByStoreId';
import { useUpdateNoticeList } from '@/models/notice/useUpdateNoticeList';
import { observerByScroll } from '@/shared/utils/observerByScroll';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { useRef, useState } from 'react';

interface Props {
  store: Store;
}

export const NoticeContent = ({ store }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [pagenation, setPagenation] = useState({ offset: 0, hasNext: true });
  const [noticeList, setNoticeList] = useState<{ item: Notice }[]>([]);
  const { data, isLoading } = useGetNoticeByStoreId(
    store?.id,
    pagenation.offset,
  );

  useUpdateNoticeList(data, setNoticeList, setPagenation);
  observerByScroll({ isLoading, pagenation, setPagenation, ref: divRef });

  const noticeContent = noticeList.length ? (
    <>
      <NoticeCardList noticeList={noticeList} store={store} />
      <div ref={divRef} style={{ height: '0.1px', width: '100%' }} />
    </>
  ) : (
    <>
      <NotFoundNotice shop_id={store?.id} />
    </>
  );

  return (
    <>{noticeList ? noticeContent : renderSpinner(noticeContent, isLoading)}</>
  );
};

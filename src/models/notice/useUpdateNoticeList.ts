import { Dispatch, SetStateAction, useEffect } from 'react';

export const useUpdateNoticeList = (
  data: any,
  setNoticeList: Dispatch<SetStateAction<{ item: Notice }[]>>,
  setPagenation: Dispatch<SetStateAction<{ offset: number; hasNext: boolean }>>,
) => {
  useEffect(() => {
    if (!data?.data) return;

    setNoticeList(prev => [...prev, ...data.data.items]);
    setPagenation(prev => ({
      ...prev,
      hasNext: data.data.hasNext,
    }));
  }, [data?.data]);
};

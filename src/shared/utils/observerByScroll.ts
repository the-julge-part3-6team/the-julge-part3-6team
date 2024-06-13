import { Dispatch, Ref, SetStateAction, useEffect } from 'react';

interface ObserverByScrollTypes {
  isLoading: boolean;
  pagenation: { hasNext: boolean; offset: number };
  setPagenation: Dispatch<SetStateAction<{ hasNext: boolean; offset: number }>>;
  ref: any;
}

export const observerByScroll = ({
  isLoading,
  pagenation,
  setPagenation,
  ref,
}: ObserverByScrollTypes) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const handleObserver: IntersectionObserverCallback = entries => {
      const target = entries[0];

      if (target.isIntersecting && !isLoading) {
        if (!pagenation.hasNext) return;

        setPagenation(prev => {
          return {
            ...prev,
            offset: prev.offset + 3,
          };
        });
      }
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const currentDivRef = ref.current;

    if (currentDivRef) {
      observer.observe(currentDivRef);
    }

    return () => {
      if (currentDivRef) {
        observer.unobserve(currentDivRef);
      }
    };
  }, [isLoading]);
};

import { Dispatch, SetStateAction, useEffect } from 'react';

interface ObserverByScrollTypes {
  isLoading: boolean;
  ref: any;
  fetchNextPage: any;
}

export const observerByScroll = ({
  isLoading,
  ref,
  fetchNextPage,
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
        fetchNextPage();
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
  }, [isLoading, ref]);
};

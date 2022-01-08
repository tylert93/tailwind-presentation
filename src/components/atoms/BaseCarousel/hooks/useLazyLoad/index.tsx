import { useState, useCallback, useEffect } from 'react';
import { LazyLoadTypes } from '../../types';
import { EmblaCarouselType } from 'embla-carousel-react';

const useLazyLoad = (
  embla: EmblaCarouselType | undefined,
  type: LazyLoadTypes
) => {
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const findSlidesInView = useCallback(() => {
    if (!embla) {
      return;
    }

    setSlidesInView((slidesInView) => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }

      if (!type) {
        return [...embla.slidesInView(true), ...embla.slidesNotInView()];
      }
      const inView = embla.slidesInView(true);

      const slidesToLoad =
        type === 'ahead' && inView.length > 0
          ? [inView[inView.length - 1] + 1]
          : [];

      return slidesInView.concat(
        [...inView, ...slidesToLoad].filter(
          (index) => slidesInView.indexOf(index) === -1
        )
      );
    });
  }, [embla, type]);

  useEffect(() => {
    if (!embla) {
      return;
    }
    findSlidesInView();
    embla.on('select', findSlidesInView);

    return () => {
      embla.off('select', findSlidesInView);
    };
  }, [embla, findSlidesInView]);

  return slidesInView;
};

export default useLazyLoad;

import { useCallback, useState, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

const useArrows = (embla: EmblaCarouselType | undefined) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) {
      return;
    }

    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) {
      return;
    }

    onSelect();
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return {
    scrollPrev,
    scrollNext,
    nextBtnEnabled,
    prevBtnEnabled,
  };
};

export default useArrows;

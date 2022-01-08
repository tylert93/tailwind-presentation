import { useCallback, useState, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

const useDots = (embla: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) {
      return;
    }
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) {
      return;
    }
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, setScrollSnaps, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    scrollTo,
  };
};

export default useDots;

import { useCallback, useState, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

const useActiveSlide = (embla: EmblaCarouselType | undefined) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const onSelect = useCallback(() => {
    if (!embla) {
      return;
    }
    setActiveSlide(embla.selectedScrollSnap());
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

  return activeSlide;
};

export default useActiveSlide;

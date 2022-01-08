import React, {
  useState,
  useEffect,
  useCallback,
  FC,
  KeyboardEvent,
} from 'react';
import Dots from './Dots';
import useEmblaCarousel from 'embla-carousel-react';
import IconButton from '@src/components/atoms/IconButton';
import NextArrow from '@src/components/icons/NextArrow';
import PrevArrow from '@src/components/icons/PrevArrow';
import colors from '@src/utils/colors';
import clsx from 'clsx';

const Carousel: FC<{ className?: string; arrows?: boolean }> = ({
  arrows = false,
  className,
  children,
}) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  const KeyboardNav = (event: KeyboardEvent) => {
    if (event.code === 'ArrowRight') {
      scrollNext();
    }

    if (event.code === 'ArrowLeft') {
      scrollPrev();
    }
  };

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    window.addEventListener('keydown', KeyboardNav as () => void);

    return () =>
      window.removeEventListener('keydown', KeyboardNav as () => void);
  }, [embla]);

  return (
    <>
      <div className={clsx('relative', className && className)}>
        <div className="w-full h-full overflow-hidden" ref={viewportRef}>
          <div className="flex h-full [user-select: none] [-webkit-touch-callout: none] [-khtml-user-select: none] [-webkit-tap-highlight-color: transparent]">
            {children}
          </div>
        </div>
      </div>

      {arrows && (
        <div className="absolute top-4 right-4">
          <IconButton
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="p-0.75 mr-1 hover:!bg-primary-main outline-none"
          >
            <PrevArrow height={20} width={20} color={colors.common.white} />
          </IconButton>
          <IconButton
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="p-0.75 hover:!bg-primary-main outline-none"
          >
            <NextArrow height={20} width={20} color={colors.common.white} />
          </IconButton>
        </div>
      )}

      <div className="absolute bottom-2 left-50% transform -translate-x-50%">
        <Dots
          scrollSnaps={scrollSnaps}
          scrollTo={scrollTo}
          selectedIndex={selectedIndex}
          size="small"
          color="primary"
        />
      </div>
    </>
  );
};

export default Carousel;

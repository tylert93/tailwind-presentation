import React, { Ref, forwardRef } from 'react';
import clsx from 'clsx';
import KeyCode from '@src/types/KeyCode';
import { IBaseCarouselProps } from './types';
import useArrows from './hooks/useArrows';

export { default as Slide } from './slide';
export { default as Dots } from './dots';
export * from './arrows';
export { default as useLazyLoad } from './hooks/useLazyLoad';
export { default as useArrows } from './hooks/useArrows';
export { default as useDots } from './hooks/useDots';
export { default as useActiveSlide } from './hooks/useActiveSlide';

const BaseCarousel = (
  {
    children,
    dots,
    arrows,
    embla,
    classes: overrideClasses,
    'data-testid': testId = 'embla-container',
  }: IBaseCarouselProps,
  ref: Ref<HTMLDivElement>
) => {
  const { scrollPrev, scrollNext, nextBtnEnabled, prevBtnEnabled } =
    useArrows(embla);

  const stopPropagation = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      role="button"
      className={clsx(
        'w-full',
        'h-full',
        'relative',
        'outline-none',
        overrideClasses?.carousel
      )}
      tabIndex={0}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.repeat) {
          return;
        }

        switch (e.keyCode) {
          case KeyCode.ArrowRight: {
            nextBtnEnabled && scrollNext();
            break;
          }
          case KeyCode.ArrowLeft: {
            prevBtnEnabled && scrollPrev();
            break;
          }
          default: {
            break;
          }
        }
      }}
      data-testid={testId}
    >
      <div
        role="presentation"
        ref={ref}
        onTouchStart={stopPropagation}
        onMouseDown={stopPropagation}
        onPointerDown={stopPropagation}
        className={clsx('h-full overflow-hidden', overrideClasses?.viewport)}
      >
        <div className={clsx('flex', 'h-full', overrideClasses?.container)}>
          {children}
        </div>
      </div>
      {dots}
      {arrows}
    </div>
  );
};

export default forwardRef(BaseCarousel);

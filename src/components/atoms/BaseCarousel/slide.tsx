import React, { useState, useEffect } from 'react';
import { ISlideProps } from './types';
import clsx from 'clsx';

const Slide = ({ children, inView, className, ...props }: ISlideProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasLoaded(true);
    }
  }, [inView, setHasLoaded]);

  return (
    <div
      className={clsx(
        'h-full min-w-full relative cursor-grab active:cursor-grabbing [touch-action:pan-y]',
        className
      )}
      {...props}
    >
      {hasLoaded && children}
    </div>
  );
};

export default Slide;

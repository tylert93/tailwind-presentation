import React from 'react';
import DotButton from '@src/components/atoms/DotButton';
import TwFlex from '@src/components/atoms/Flex';
import { IDotProps } from './types';

const Dots = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
  color,
  size,
}: IDotProps) => {
  return scrollSnaps.length > 1 ? (
    <TwFlex
      justify="center"
      className="pt-1.25 pb-2"
      data-testid="dots-container"
    >
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
          color={color}
          size={size}
        />
      ))}
    </TwFlex>
  ) : null;
};

export default Dots;

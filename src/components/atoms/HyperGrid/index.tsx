import React, { ElementType } from 'react';
import clsx from 'clsx';
import { HyperGridProps, DivisionOption } from './types';
import {
  directionClasses,
  justifyClasses,
  alignItemsClasses,
  widthClasses,
} from './styles';

const baseUnit = require('@src/../theme/baseUnit');

const defaultElement = 'div';

const HyperGrid = <T extends ElementType = typeof defaultElement>({
  as = 'div',
  container,
  item,
  direction = 'row',
  justify = 'start',
  alignItems = 'start',
  xs = 12,
  sm,
  md,
  lg,
  xl,
  spacing = 0,
  spacingY = 0,
  spacingX = 0,
  className,
  wrap = 'wrap',
  children,
}: HyperGridProps<T>) => {
  const TagName = as || defaultElement;

  const space = spacing * baseUnit;
  const spaceY = spacingY * baseUnit || space;
  const spaceX = spacingX * baseUnit || space;

  const cleanseScreen = (screen: DivisionOption | true) => {
    if (screen === true) {
      return 12;
    }

    return screen as DivisionOption;
  };

  const containerClass = clsx(
    'flex',
    'w-full',
    directionClasses[direction],
    justifyClasses[justify],
    alignItemsClasses[alignItems]
  );

  const itemClass = clsx(
    'border-box',
    widthClasses.xs[cleanseScreen(xs)],
    sm && widthClasses.sm[cleanseScreen(sm)],
    md && widthClasses.md[cleanseScreen(md)],
    lg && widthClasses.lg[cleanseScreen(lg)],
    xl && widthClasses.xl[cleanseScreen(xl)]
  );

  const overallClass = clsx(
    container && containerClass,
    item && itemClass,
    className && className
  );

  return (
    <TagName
      className={overallClass}
      style={{ gap: `${spaceY}px ${spaceX}px`, flexWrap: wrap }}
    >
      {children}
    </TagName>
  );
};

export default HyperGrid;

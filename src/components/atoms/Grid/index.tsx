import React, { ElementType } from 'react';
import clsx from 'clsx';
import { GridProps } from './types';
import { gridColsClasses } from './styles';

const baseUnit = require('@src/../theme/baseUnit');

const defaultElement = 'div';

const Grid = <T extends ElementType = typeof defaultElement>({
  as,
  xs = 12,
  sm,
  md,
  lg,
  xl,
  spacing = 0,
  spacingY = 0,
  spacingX = 0,
  className,
  children,
}: GridProps<T>) => {
  const TagName = as || defaultElement;

  const space = spacing * baseUnit;
  const spaceY = spacingY * baseUnit || space;
  const spaceX = spacingX * baseUnit || space;

  const overallClass = clsx(
    'grid',
    gridColsClasses.xs[xs],
    sm && gridColsClasses.sm[sm],
    md && gridColsClasses.md[md],
    lg && gridColsClasses.lg[lg],
    xl && gridColsClasses.xl[xl],
    className && className
  );

  return (
    <TagName
      className={overallClass}
      style={{ gap: `${spaceY}px ${spaceX}px` }}
    >
      {children}
    </TagName>
  );
};

export default Grid;

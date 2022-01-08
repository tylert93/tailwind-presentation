import React, { ElementType } from 'react';
import clsx from 'clsx';
import { ColumnProps } from './types';
import { colSpanClasses } from './styles';

const defaultElement = 'div';

const Column = <T extends ElementType = typeof defaultElement>({
  as,
  xs = 'full',
  sm,
  md,
  lg,
  xl,
  className,
  children,
  ...rest
}: ColumnProps<T>) => {
  const TagName = as || defaultElement;

  const overallClass = clsx(
    colSpanClasses.xs[xs],
    sm && colSpanClasses.sm[sm],
    md && colSpanClasses.md[md],
    lg && colSpanClasses.lg[lg],
    xl && colSpanClasses.xl[xl],
    className && className
  );

  return (
    <TagName className={overallClass} {...rest}>
      {children}
    </TagName>
  );
};

export default Column;

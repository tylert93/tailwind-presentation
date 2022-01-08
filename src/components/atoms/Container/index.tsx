import React, { ElementType } from 'react';
import clsx from 'clsx';
import { ContainerProps } from './types';

const defaultElement = 'div';

const Container = <T extends ElementType = typeof defaultElement>({
  as,
  maxWidth = 'lg',
  className,
  children,
  ...rest
}: ContainerProps<T>) => {
  const TagName = as || defaultElement;

  const overallClass = clsx(
    'px-3',
    'mx-auto',
    `max-w-screen-${maxWidth}`,
    className && className
  );

  return (
    <TagName className={overallClass} {...rest}>
      {children}
    </TagName>
  );
};

export default Container;

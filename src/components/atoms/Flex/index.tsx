import React, { ElementType } from 'react';
import clsx from 'clsx';
import { FlexProps } from './types';
import { directionClasses, justifyClasses, alignItemsClasses } from './styles';

const defaultElement = 'div';

const Flex = <T extends ElementType = typeof defaultElement>({
  as,
  direction = 'row',
  justify = 'start',
  alignItems = 'start',
  className,
  children,
  ...props
}: FlexProps<T>) => {
  const TagName = as || defaultElement;

  const overallClass = clsx(
    'flex',
    directionClasses[direction],
    justifyClasses[justify],
    alignItemsClasses[alignItems],
    className && className
  );

  return (
    <TagName className={overallClass} style={{ flexWrap: 'wrap' }} {...props}>
      {children}
    </TagName>
  );
};

export default Flex;

import React, { ElementType } from 'react';
import clsx from 'clsx';
import { StyledLinkProps } from './types';

const defaultElement = 'div';

const StyledLink = <T extends ElementType = typeof defaultElement>({
  as,
  underline = 'hover',
  className,
  children,
  ...rest
}: StyledLinkProps<T>) => {
  const TagName = as || defaultElement;

  const underlineClasses = {
    none: 'no-underline',
    hover: 'hover:underline',
    always: 'underline',
  };

  const overallClass = clsx(
    'cursor-pointer',
    underlineClasses[underline],
    className && className
  );

  return (
    <TagName className={overallClass} {...rest}>
      {children}
    </TagName>
  );
};

export default StyledLink;

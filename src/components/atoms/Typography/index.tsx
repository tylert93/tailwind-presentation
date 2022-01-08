import React, { ElementType } from 'react';
import clsx from 'clsx';
import { TypographyProps } from './types';
import { variantClasses, alignClasses } from './styles';

const defaultElement = 'span';

const Typography = <T extends ElementType = typeof defaultElement>({
  as,
  variant,
  component = defaultElement,
  align,
  numberOfLines,
  className,
  children,
  ...rest
}: TypographyProps<T>) => {
  const TagName = as || component;

  const overallClass = clsx(
    'block',
    'prose',
    variant && variantClasses[variant],
    align && alignClasses[align],
    numberOfLines && `line-clamp-${numberOfLines}`,
    className
  );

  return (
    <TagName className={overallClass} {...rest}>
      {children}
    </TagName>
  );
};

export default Typography;

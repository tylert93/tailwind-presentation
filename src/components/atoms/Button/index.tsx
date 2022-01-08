import React, { ElementType } from 'react';
import { ButtonProps } from './types';
import Typography from '@src/components/atoms/Typography';
import clsx from 'clsx';

const defaultElement = 'button';

const Button = <T extends ElementType = typeof defaultElement>({
  as,
  variant,
  typography = 'titleMD',
  component,
  color = 'primary',
  href,
  className,
  children,
  ...props
}: ButtonProps<T>) => {
  const isLink = href ? 'a' : '';
  const TagName = isLink || as || defaultElement;

  const colorClasses = {
    primary: {
      contained: 'bg-primary-main',
      outlined:
        'text-primary-main border-primary-main hover:bg-primary-main hover:text-common-white',
      'outline-inverted':
        'text-primary-main border-primary-main hover:border-secondary-main',
      text: 'text-primary-main',
    },
    secondary: {
      contained: 'bg-secondary-main',
      outlined:
        'text-secondary-main border-secondary-main hover:bg-secondary-main hover:text-common-white',
      'outline-inverted':
        'text-secondary-main border-secondary-main hover:border-primary-main',
      text: 'text-secondary-main',
    },
  };

  const variantClasses = {
    contained: clsx(
      'text-common-white hover:bg-opacity-60',
      colorClasses[color].contained
    ),
    outlined: clsx('bg-common-white border-2', colorClasses[color].outlined),
    'outlined-inverted': clsx(
      'bg-common-white border hover:bg-inherit',
      colorClasses[color]['outline-inverted']
    ),
    text: clsx('hover:bg-opacity-60', colorClasses[color].text),
  };

  const overallClass = clsx(
    'block',
    'flex',
    'justify-center',
    'items-center',
    'leading-inherit',
    'rounded',
    'px-2',
    'py-0.75',
    'cursor-pointer',
    'transition-background',
    'duration-long',
    'ease-out',
    variant && variantClasses[variant],
    className && className
  );

  return (
    <TagName className={overallClass} href={href} {...props}>
      <Typography variant={typography} component={component}>
        {children}
      </Typography>
    </TagName>
  );
};

export default Button;

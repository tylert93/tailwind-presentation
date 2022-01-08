import React from 'react';
import { INavButtonProps } from './types';
import clsx from 'clsx';
import NextArrow from '@src/components/icons/NextArrow';
import PrevArrow from '@src/components/icons//PrevArrow';

const arrowButton =
  'flex justify-center items-center absolute p-0 top-50% h-4 min-w-[42px] z-10 opacity-70 cursor-pointer transform -translate-y-50% text-[16px] border border-secondary-main disabled:border-gray-200 rounded-sm';

export const PrevButton = ({
  enabled,
  onClick,
  className,
  ...props
}: INavButtonProps) => {
  return (
    <button
      aria-label="previous slide"
      tabIndex={-1}
      className={clsx(arrowButton, 'left-[96px]', className)}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={!enabled}
      {...props}
    >
      <PrevArrow />
    </button>
  );
};

export const NextButton = ({
  enabled,
  onClick,
  className = '',
  ...props
}: INavButtonProps) => {
  return (
    <button
      aria-label="next slide"
      tabIndex={-1}
      className={clsx(arrowButton, 'right-[96px]', className)}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={!enabled}
      {...props}
    >
      <NextArrow />
    </button>
  );
};

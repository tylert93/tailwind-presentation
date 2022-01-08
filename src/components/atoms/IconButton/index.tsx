import React, { FC } from 'react';
import { IIconProps } from './types';
import clsx from 'clsx';

const IconButton: FC<IIconProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  ...props
}) => {
  const overallClass = clsx(
    'bg-none border-opacity-0 rounded-sm cursor-pointer hover:bg-gray-200',
    className && className
  );

  return (
    <button
      type="button"
      className={overallClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;

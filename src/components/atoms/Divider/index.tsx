import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

const Divider: FC<HTMLAttributes<HTMLHRElement>> = ({ className, ...rest }) => {
  const overallClass = clsx(
    'border-none',
    'h-px',
    'bg-divider',
    className && className
  );

  return <hr className={overallClass} {...rest} />;
};

export default Divider;

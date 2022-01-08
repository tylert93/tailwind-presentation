import React, { FC } from 'react';
import Typography from '@src/components/atoms/Typography';
import { IListItemTextProps } from './types';
import clsx from 'clsx';

const ListItemText: FC<IListItemTextProps> = ({
  variant = 'bodyMD',
  className,
  children,
}) => (
  <span className={clsx('flex-1', className && className)}>
    <Typography variant={variant}>{children}</Typography>
  </span>
);

export default ListItemText;

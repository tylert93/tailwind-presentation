import React, { FC, cloneElement, Children, isValidElement } from 'react';
import clsx from 'clsx';
import { IListItemIconProps } from './types';

const ListItemIcon: FC<IListItemIconProps> = ({
  className,
  children,
  ...props
}) => (
  <div>
    {/* @ts-ignore */}
    {Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          ...child.props,
          ...props,
          className: clsx(className && className),
        });
      }
    })}
  </div>
);

export default ListItemIcon;

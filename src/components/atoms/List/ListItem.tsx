import React, { ElementType } from 'react';
import { ListItemProps } from './types';
import Flex from '@src/components/atoms/Flex';
import clsx from 'clsx';

const defaultElement = 'div';

const ListItem = <T extends ElementType = typeof defaultElement>({
  as,
  button,
  className,
  children,
  ...props
}: ListItemProps<T>) => {
  const TagName = as ?? defaultElement;

  return (
    <TagName
      tabIndex={0}
      className={clsx(
        'py-1 px-2 w-full',
        button && 'cursor-pointer hover:bg-gray-100',
        className && className
      )}
      {...props}
    >
      <Flex justify="start" alignItems="center">
        {children}
      </Flex>
    </TagName>
  );
};

export default ListItem;

import React, { FC } from 'react';
import Flex from '../Flex';
import clsx from 'clsx';

const List: FC<{ className?: string }> = ({ className, children }) => (
  <Flex
    direction="col"
    justify="start"
    alignItems="start"
    className={clsx('py-1', className && className)}
  >
    {children}
  </Flex>
);

export default List;

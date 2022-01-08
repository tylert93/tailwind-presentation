import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IStyledLinkOwnProps<T extends ElementType = ElementType> {
  as?: T;
  underline?: 'none' | 'hover' | 'always';
}

export type StyledLinkProps<T extends ElementType> = IStyledLinkOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IStyledLinkOwnProps<T>>;

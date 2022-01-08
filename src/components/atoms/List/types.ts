import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { Variants } from '../Typography/types';

interface IListItemOwnProps<T extends ElementType = ElementType> {
  as?: T;
  button?: boolean;
  children?: ElementType | ReactNode;
}

export type ListItemProps<T extends ElementType> = IListItemOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IListItemOwnProps<T>>;

export interface IListItemTextProps {
  variant?: Variants;
  className?: string;
}

export interface IListItemIconProps {
  className?: string;
  height?: number | string;
  width?: number | string;
}

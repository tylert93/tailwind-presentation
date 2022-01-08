import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import { Variants, Components } from '@src/components/atoms/Typography/types';

export interface IButtonOwnProps<T extends ElementType = ElementType> {
  as?: T;
  variant?: 'contained' | 'outlined' | 'outlined-inverted' | 'text';
  typography?: Variants;
  component?: Components;
  color?: 'primary' | 'secondary';
  children?: ElementType | ReactNode;
}

export type ButtonProps<T extends ElementType> = IButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IButtonOwnProps<T>>;

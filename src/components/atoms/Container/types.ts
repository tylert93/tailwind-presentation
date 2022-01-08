import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IContainerOwnProps<T extends ElementType = ElementType> {
  as?: T;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type ContainerProps<T extends ElementType> = IContainerOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IContainerOwnProps<T>>;

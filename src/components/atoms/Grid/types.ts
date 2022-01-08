import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IGridOwnProps<T extends ElementType = ElementType> {
  as?: T;
  xs?: divisionOptions;
  sm?: divisionOptions;
  md?: divisionOptions;
  lg?: divisionOptions;
  xl?: divisionOptions;
  spacing?: number;
  spacingY?: number;
  spacingX?: number;
}

type divisionOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps<T extends ElementType> = IGridOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IGridOwnProps<T>>;

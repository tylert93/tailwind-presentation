import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IColumnOwnProps<T extends ElementType = ElementType> {
  as?: T;
  xs?: divisionOptions | 'full';
  sm?: divisionOptions;
  md?: divisionOptions;
  lg?: divisionOptions;
  xl?: divisionOptions;
}

type divisionOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps<T extends ElementType> = IColumnOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IColumnOwnProps<T>>;

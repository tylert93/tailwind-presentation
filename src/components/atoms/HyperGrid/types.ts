import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IHyperGridOwnProps<T extends ElementType> {
  as?: T | 'div';
  container?: boolean;
  item?: boolean;
  direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  xs?: DivisionOption | true;
  sm?: DivisionOption | true;
  md?: DivisionOption | true;
  lg?: DivisionOption | true;
  xl?: DivisionOption | true;
  spacing?: number;
  spacingY?: number;
  spacingX?: number;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export type DivisionOption =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto'
  | 'rest';

export type HyperGridProps<T extends ElementType> = IHyperGridOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IHyperGridOwnProps<T>>;

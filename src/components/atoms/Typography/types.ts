import { ElementType, ComponentPropsWithoutRef } from 'react';

interface ITypographyOwnProps<T extends ElementType = ElementType> {
  as?: T;
  variant?: Variants;
  component?: Components;
  align?: Alignments;
  numberOfLines?: number;
}

export type Variants =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'titleXXXXL'
  | 'titleXXXL'
  | 'titleXXL'
  | 'titleXL'
  | 'titleLG'
  | 'titleMD'
  | 'titleSM'
  | 'titleXS'
  | 'bodyXL'
  | 'bodyLG'
  | 'bodyMD'
  | 'bodySM'
  | 'bodyXS'
  | 'labelMD'
  | 'labelSM'
  | 'labelXS';

export type Components = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

type Alignments = 'left' | 'center' | 'right' | 'top' | 'bottom';

export type TypographyProps<T extends ElementType> = ITypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ITypographyOwnProps<T>>;

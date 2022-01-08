import { ReactNode, MouseEvent } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';

export type LazyLoadTypes = false | 'onDemand' | 'ahead';

export interface IBaseCarouselProps {
  children: ReactNode[];
  embla: EmblaCarouselType | undefined;
  dots?: ReactNode | false | null | undefined;
  arrows?: ReactNode | false | null | undefined;
  classes?: Partial<{
    carousel: string;
    viewport: string;
    container: string;
    buttonContainer: string;
  }>;
  'data-testid'?: string;
}

export interface IDotProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo(index: number): void;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  embla?: EmblaCarouselType;
  active?: number;
}

export interface ISlideProps {
  children: ReactNode;
  inView: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface INavButtonProps {
  enabled: boolean;
  onClick: () => void;
  className?: string;
}

export interface ICarouselNavProps {
  nextEnabled?: boolean;
  prevEnabled?: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
  className?: string;
}

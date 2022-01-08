import { EmblaCarouselType } from 'embla-carousel-react';

export interface IDotProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo(index: number): void;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  embla?: EmblaCarouselType;
  active?: number;
}

import React from 'react';
import Carousel from '@src/components/atoms/Carousel';
import Slide from '@src/components/atoms/Carousel/Slide';
import Code from '@src/components/atoms/Code';
import Flex from '@src/components/atoms/Flex';
import Typography from '@src/components/atoms/Typography';
import HyperGrid from '@src/components/atoms/HyperGrid';

const EmblaCarousel = () => {
  return (
    <Carousel className="h-[100vh] w-[100vw]">
      <Slide heading="Slide 1">
        <Flex justify="center" alignItems="center" className="h-full p-4">
          <Typography className="text-4xl text-center">
            This is a project for creating react based presentations
          </Typography>
          <Typography className="text-4xl text-center">
            It uses <code>embla-carousel-react</code> to transition between
            slide. You can navigate using the dot buttons below or your arrow
            keys
          </Typography>
        </Flex>
      </Slide>
      <Slide heading="Slide 2">
        <HyperGrid container className="p-4">
          <HyperGrid container item justify="center" alignItems="center" xs>
            <Typography className="text-2xl mx-auto">
              The <code>Code</code> component utilises{' '}
              <code>prism-react-renderer</code>, allowing you to include syntax
              highlighted code snippets
            </Typography>
          </HyperGrid>
          <HyperGrid item xs className="mt-4">
            <Code />
          </HyperGrid>
        </HyperGrid>
      </Slide>
    </Carousel>
  );
};

export default EmblaCarousel;

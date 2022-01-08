import React, { FC } from 'react';
import { ISlideProps } from './types';
import Typography from '@src/components/atoms/Typography';
import Flex from '../../Flex';

const Slide: FC<ISlideProps> = ({ heading, children }) => (
  <div className="relative min-w-full h-full">
    <div className="relative overflow-hidden h-full">
      <Flex
        direction="col"
        className="h-[100vh] w-[100vw] bg-secondary-main pt-4 px-4 pb-10"
      >
        {heading && (
          <Typography
            variant="h2"
            component="h1"
            align="left"
            className="text-primary-main mb-4"
          >
            {heading}
          </Typography>
        )}
        <div className="flex-grow w-full"> {children}</div>
      </Flex>
    </div>
  </div>
);

export default Slide;

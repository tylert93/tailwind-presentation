import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import PageNav from '@src/components/molecules/PageNav';

const snippetOne = `<div className="max-w-[223px] md:max-w-[561px]" />`;

const PageTwo = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Just-in-Time Mode
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          Tailwinds just-in-time compiler for generates your styles on-demand as
          you author your templates instead of generating everything in advance
          at initial build time.
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          Since styles are generated on demand, you can just generate utility
          classes with arbitrary styling when as needed using square bracket
          notation. This also works in conjuction with variants.
        </Typography>

        <div className="my-4">
          <Code snippet={snippetOne} />
        </div>

        <PageNav prevLink="/three" nextLink="/five" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageTwo;

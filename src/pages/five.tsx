import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';

const snippetOne = `//tailwind.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Circular Std';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/circular/CircularStd-Book.otf') format('opentype');
}

@layer components {

  .g-elevation-1 {
    box-shadow: 0px 4px 8px rgb(0 0 0 / 12%);
  }
 
  .g-smartVal-adornment::after {
    @apply absolute z-0 bg-primary-main top:0 md:top-90;
    content: '';
    transform-origin: top left;
    transform: matrix(0.75, -0.7, 0.62, 0.75, 0, 0);
    width: 1200px;
    height: 787.2px;
    border-radius: 66px;
  }
  
}
`;

const PageFive = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Extracting classes with @apply
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          Even though Just-in-Time mode gives you the flexibility to create a
          class on the fly for any CSS property, having loads of arbitrary
          classes in the <InlineCode>className</InlineCode> prop can become very
          messy. In some cases it might be better to use vanilla CSS. Luckily,
          tailwind makes it very use to integrate its utility classes with
          vanilla CSS.
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          In the css where tailwind is being imported, a class can be created
          inside the <InlineCode>components</InlineCode> layer. This allows the
          classes to contain pure CSS as well as all of the tailwind utility
          classes by using the <InlineCode>@apply</InlineCode> decorator.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetOne} />
        </div>

        <PageNav prevLink="/four" nextLink="/six" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageFive;

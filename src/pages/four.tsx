import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';

const snippetOne = `<div className="max-w-[223px] md:max-w-[561px] z-[223] bg-[#0000EE]" />`;

const snippetTwo = `
<div className="[user-select: none] [-webkit-touch-callout: none] [-khtml-user-select: none]" />
`;

const snippetThree = `//tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    '../../shared/tailwind/components/**/*.{js,ts,jsx,tsx}',

    // none of the styling in these files will be applied
    // '../../shared/components/**/*.{js,ts,jsx,tsx}',
    // '../../../../client/packages/customer/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    // ...
  },
  plugins: {
    // ...
  }
}
`;

const PageFour = () => {
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

        <div className="my-8">
          <Code snippet={snippetOne} />
        </div>

        <Typography variant="bodyXL" className="mb-4">
          This sqaure notation doesn&apos;t have to be used in conjustion with
          the existing uility classes. It can be used to create completely
          unique styles. This is very useful when a utility class doesn&apos;t
          exist for a CSS property you want to use.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetTwo} />
        </div>

        <Typography variant="bodyXL" className="mb-4">
          To enable Just-in-Time mode, simply add a{' '}
          <InlineCode>mode</InlineCode> property in the{' '}
          <InlineCode>tailwind.config.js</InlineCode> and assign in a value of{' '}
          <InlineCode>&apos;jit&apos;</InlineCode>.{' '}
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          <span className="text-error-main bg-error-200 text-base py-0.5 px-1 mx-0.5 rounded-sm">
            WARNING :
          </span>{' '}
          when both Just-In-Time mode and purge are enabled, any files which are
          not included in the <InlineCode>purge</InlineCode> config array will
          not have any of their tailwind styling applied.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetThree} />
        </div>

        <PageNav prevLink="/three" nextLink="/five" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageFour;

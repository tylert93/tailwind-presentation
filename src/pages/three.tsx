import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';

const snippetOne = `//tailwind.config.js

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    '../../shared/tailwind/components/**/*.{js,ts,jsx,tsx}',
    '../../shared/components/**/*.{js,ts,jsx,tsx}',
    '../../../../client/packages/customer/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    // ...
  },
  plugins: {
    // ...
  }
}


`;

const snippetTwo = `

const Example = ({ color }) => {

  return <div className={\`bg-$\{color}-main\`} />;
};

`;

const snippetThree = `

const Example = ({ color }) => {

    const colorClasses = {
      primary: bg-primary-main,
      secondary: bg-secondary-main
    }


  return <div className={colorClasses[color]} />
};

`;

const PageThree = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Purging Styles
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          Tailwind CSS comes with built in support for purging unused CSS.
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          To use this feature, in the{' '}
          <InlineCode>tailwind.config.js</InlineCode> as a property called{' '}
          <InlineCode>purge</InlineCode> and assign it an array which contains
          the paths to all the files which contain tailwind utility classes.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetOne} />
        </div>

        <Typography variant="bodyXL" className="mt-4">
          When purge is enabled, any classes which are made using concatenation
          will not be applied.
        </Typography>

        <Typography variant="bodyXL" className="mt-8">
          This class will not be applied ❌
        </Typography>

        <div className="my-4">
          <Code snippet={snippetTwo} />
        </div>

        <Typography variant="bodyXL" className="mt-8">
          This class will be applied ✅
        </Typography>

        <div className="my-4">
          <Code snippet={snippetThree} />
        </div>

        <PageNav prevLink="/two" nextLink="/four" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageThree;

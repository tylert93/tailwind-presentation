import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import Flex from '@src/components/atoms/Flex';
import Image from 'next/image';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';

const snippetOne = `<div className="flex justify-around border-2 border-secondary-main p-2">

    <div className="h-10 w-20 bg-primary-main" />

    <div className="h-10 w-10 bg-info-main rounded" />

    <div className="h-10 w-10 bg-success-main rounded-full" />

</div>
`;

const snippetTwo = `<div className="h-10 w-10 bg-info-main lg:bg-success-main" />

<div className="h-10 w-10 bg-primary-main hover:bg-error-main hover:cursor-pointer" />
`;

const PageOne = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          What is Tailwind ?
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          Tailwind is a CSS framework which provides a large number of utility
          classes. This allows components to be styled without any actual markup
          needing to be written.
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          There is a utility class for pretty much every CSS property you can
          think of. The tailwind{' '}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-hyperlink-main hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            documentation
          </a>{' '}
          gives a very clear and detailed guide to what classes are available
          and their effects.
        </Typography>
        <div className="my-8">
          <Code snippet={snippetOne} />
          <div className="flex justify-around border-2 border-secondary-main p-2 mt-4">
            <div className="h-10 w-20 bg-primary-main" />

            <div className="h-10 w-10 bg-info-main rounded" />

            <div className="h-10 w-10 bg-success-main rounded-full" />
          </div>
        </div>

        <Typography variant="bodyXL" className="mt-4">
          All of the base utility classes can be prefixed with pseudo selectors
          to provide dynamic styling. This includes such selectors as:
        </Typography>

        <ul className="list-disc list-inside ml-8 mt-4">
          <li className="my-2">
            <InlineCode>:hover</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>:active</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>:focus</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>:sm</InlineCode>, <InlineCode>:md</InlineCode>,{' '}
            <InlineCode>:lg</InlineCode>, <InlineCode>:xl</InlineCode> (screen
            sizes)
          </li>
        </ul>
        <div className="my-8">
          <Code snippet={snippetTwo} />
          <Flex direction="col" alignItems="center" className="mt-4">
            <div className="h-10 w-10 bg-info-main lg:bg-success-main" />

            <div className="h-10 w-10 bg-primary-main hover:bg-error-main hover:cursor-pointer mt-4" />
          </Flex>
        </div>

        <Typography variant="bodyXL" className="mt-4">
          There is a very useful VS Code extension called `Tailwind CSS
          Intellisense` which provides an intellisense for all of the available
          utility classes.
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          It will also display exactly what styling is being applied whenever a
          class is hovered over.
        </Typography>

        <Flex justify="center" className="mt-4">
          <Image
            src="/intellisense.gif"
            alt="intellisense"
            width={600}
            height={360}
          />
        </Flex>
        <PageNav prevLink="/" nextLink="/two" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageOne;

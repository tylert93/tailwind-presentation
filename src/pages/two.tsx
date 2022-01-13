import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import Flex from '@src/components/atoms/Flex';
import Image from 'next/image';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';

const snippetOne = `//tailwind.config.js

module.exports = {
  theme:{
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1176px',
      xl: '1920px'
    },
    extends:{
      maxWidth: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        none: 'none',
      },
    }
  }
}

`;

const snippetTwo = `//tailwind.config.js

module.exports = {
  theme: {
    // ...
    extends: {
      // ...
      zIndex: {
        'dialog-bg': '4000',
        'dialog-content': '4001'
      }
    }
  }
}


`;

const snippetThree = `//tailwind.config.js

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
`;

const PageTwo = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Customisation
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          All of the utility classes which come from tailwind are based off of a
          theme. Tailwind ships with a{' '}
          <a
            href="https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js"
            className="text-hyperlink-main hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            default theme
          </a>{' '}
          . This can be customised by creating a{' '}
          <InlineCode>tailwind.config.js</InlineCode> file and including your
          desired styling preferences.
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          Styles injected into the <InlineCode>theme</InlineCode> object will
          conpletely overwrite the applicable utility classes from the default
          theme. Style injected into the next <InlineCode>extends</InlineCode>{' '}
          object will be included along side the default classes.
        </Typography>

        <Typography variant="bodyXL" className="mt-4">
          In the example below the screen width pseudo selectors have been
          overwritten, however the <InlineCode>maxWidth</InlineCode> property
          has access to the default classes, such as{' '}
          <InlineCode>max-w-full</InlineCode> and the new extended classes
        </Typography>

        <div className="my-8">
          <Code snippet={snippetOne} />
          <Flex justify="center" className="mt-4">
            <Image
              src="/extending.gif"
              alt="extending"
              width={750}
              height={229}
            />
          </Flex>
        </div>

        <Typography variant="bodyXL" className="mt-4">
          There aren&apos;t any naming conventions you have to stick you.
          Whatever values you add to the{' '}
          <InlineCode>tailwind.config.js</InlineCode> will determine the classes
          available to you and the styles they will apply.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetTwo} />
          <Flex justify="center" className="mt-4">
            <Image
              src="/z-dialog.png"
              alt="z-dialog"
              width={750}
              height={292}
            />
          </Flex>
        </div>

        <Typography variant="bodyXL" className="mt-4">
          Some utility classes, such as those for typography, are only available
          by enabling certain plugins which are downloaded as npm packages and
          included in the <InlineCode>tailwind.config.js</InlineCode> file.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetThree} />
        </div>

        <Typography variant="bodyXL" className="mt-4">
          On the <InlineCode>projectTailwind-V3</InlineCode> branch, all of the
          theme configurations can be found in{' '}
          <InlineCode>shared/tailwind/theme</InlineCode>
        </Typography>

        <PageNav prevLink="/one" nextLink="/three" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageTwo;

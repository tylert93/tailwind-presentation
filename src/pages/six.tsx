import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import Code from '@src/components/atoms/Code';
import PageNav from '@src/components/molecules/PageNav';
import InlineCode from '@src/components/atoms/InlineCode';
import Flex from '@src/components/atoms/Flex';
import Image from 'next/image';

const snippetOne = `
<Container className="px-3 pt-3.5 pb-4 sm:pt-7 sm:pb-11">

  <HyperGrid container justify="between">

    <HyperGrid item xs={12} md={6}>
      <MatchMakerV2 className="h-2.5 w-19.25 mt-3.5 mb-1.5" />
      <Typography
        variant="titleXXXL"
      >
        Target your dream street and get matched.
      </Typography>
      
      <Button
        color="primary"
        variant="contained"
        className="h-6 w-full mt-3 mb-2.75 sm:w-20.5 sm:mt-4"
        href="/about-boomin-matchmaker"
        aria-label="Learn more about MatchMaker"
      >
        Learn more
      </Button>
    </HyperGrid>

    <HyperGrid
      item
      className="relative min-h-30.5 sm:min-h-50"
      xs={12}
      md={5}
    >
      <img
        src={'\${ASSET_PREFIX}/images/matchMaker-v2/mm-family.png'}
        alt="MatchMaker Family"
      />
    </HyperGrid>

  </HyperGrid>

</Container>
`;

const PageSix = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Design approach
        </Typography>

        <Typography variant="bodyXL" className="mb-4">
          I created a UI component library using Tailwind. The full library of
          compoents can be found in{' '}
          <InlineCode>&apos;shared/tailwind/components&apos;</InlineCode>
          includes the following:
        </Typography>

        <ul className="list-disc list-inside ml-8 my-4">
          <li className="my-2">
            <InlineCode>AppBar</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Button</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>ClickAwayListener</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Collapse</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Column</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Container</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Dialog</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Divider</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>DotButton</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Drawer</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Flex</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Grid</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>HyperGrid</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>IconButton</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Image</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>List</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Menu</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>StyledLink</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>TextField</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>Typography</InlineCode>
          </li>
        </ul>

        <Typography variant="bodyXL" className="mb-4">
          Most of these components ahve been based upon componets from the
          Material UI component library. This allows them to be easily
          integrated with the website without changing it&apos;s design.
        </Typography>

        <div className="my-8">
          <Code snippet={snippetOne} />
        </div>

        <Typography variant="bodyXL" className="mb-4">
          Many of these components are polymorphic. Their base HTML tag can be
          changed using the <InlineCode>as</InlineCode> prop. The example below
          shows that an error occurs when trying to add a{' '}
          <InlineCode>href</InlineCode> to a <InlineCode>typography</InlineCode>{' '}
          component. This is becasue its deafult HTML tag is a span. Using the{' '}
          <InlineCode>as</InlineCode> prop to cast the component as a link will
          allow it to take a <InlineCode>href</InlineCode> and make this error
          go away.
        </Typography>

        <Flex justify="center" className="my-8">
          <Image
            src="/polymorphic.gif"
            alt="polymorphic"
            width={600}
            height={314}
          />
        </Flex>

        <Typography variant="bodyXL" className="mb-4">
          One other area we rely on Material UI for is our{' '}
          <InlineCode>useMediaQuery</InlineCode> and{' '}
          <InlineCode>useMedia</InlineCode> hooks, so these have been rebuilt
          using CSS and the screen sizes stored in the tailwind theme. This
          includes the following <InlineCode>useMedia</InlineCode> hooks:
        </Typography>

        <ul className="list-disc list-inside ml-8 my-4">
          <li className="my-2">
            <InlineCode>useSmallMobile</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useMobile</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useIsOverMobile</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useTablet</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useTabletDown</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useDesktop</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useLargeDesktop</InlineCode>
          </li>
          <li className="my-2">
            <InlineCode>useIsMobileScreen</InlineCode>
          </li>
        </ul>

        <PageNav prevLink="/five" nextLink="/seven" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageSix;

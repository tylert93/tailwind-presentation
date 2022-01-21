import React from 'react';
import Flex from '@src/components/atoms/Flex';
import Typography from '@src/components/atoms/Typography';
import Image from 'next/image';
import Plus from '@src/components/icons/Plus';
import colors from '@src/utils/colors';
import PageNav from '@src/components/molecules/PageNav';
import HyperGrid from '@src/components/atoms/HyperGrid';

const IndexPage = () => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      className="h-[100vh] w-[100vw] p-4"
    >
      <Flex
        direction="col"
        justify="center"
        alignItems="center"
        className="w-[300px]"
      >
        <Image
          src="/tailwindcss-icon.svg"
          alt="tailwind icon"
          width={200}
          height={130}
        />
        <Typography variant="titleXXXL" className="mt-2">
          tailwind css
        </Typography>
      </Flex>

      <Plus
        width={50}
        height={50}
        color={colors.secondary.main}
        className="ml-5 mr-8"
      />
      <Image
        src="/boomin-logo.svg"
        alt="boomin logo"
        width={300}
        height={100}
      />

      <HyperGrid container justify="center" className="absolute bottom-10">
        <HyperGrid item xs={8}>
          <PageNav nextLink="/one" />
        </HyperGrid>
      </HyperGrid>
    </Flex>
  );
};

export default IndexPage;

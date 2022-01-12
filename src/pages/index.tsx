import React from 'react';
import Flex from '@src/components/atoms/Flex';
import Typography from '@src/components/atoms/Typography';
import Image from 'next/image';
import Plus from '@src/components/icons/Plus';
import NextArrow from '@src/components/icons/NextArrow';
import StyledLink from '@src/components/atoms/StyledLink';
import Link from 'next/link';
import colors from '@src/utils/colors';

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
      <div className="absolute bottom-4 right-8">
        <Link href="/one" passHref>
          <StyledLink className="flex items-center">
            Start <NextArrow width={20} height={20} className="ml-2" />
          </StyledLink>
        </Link>
      </div>
    </Flex>
  );
};

export default IndexPage;

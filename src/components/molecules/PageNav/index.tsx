import React from 'react';
import { IPageNavProps } from './types';
import Link from 'next/link';
import StyledLink from '@src/components/atoms/StyledLink';
import Flex from '@src/components/atoms/Flex';
import NextArrow from '@src/components/icons/NextArrow';
import PrevArrow from '@src/components/icons/PrevArrow';
import clsx from 'clsx';

const PageNav = ({ prevLink, nextLink, className }: IPageNavProps) => (
  <Flex justify="between" className={clsx(className && className)}>
    <Link href={prevLink} passHref>
      <StyledLink className="flex items-center">
        <PrevArrow width={20} height={20} className="mr-2" /> Prev
      </StyledLink>
    </Link>

    <Link href={nextLink} passHref>
      <StyledLink className="flex items-center">
        Next <NextArrow width={20} height={20} className="ml-2" />
      </StyledLink>
    </Link>
  </Flex>
);

export default PageNav;

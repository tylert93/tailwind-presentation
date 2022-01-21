import React from 'react';
import { IPageNavProps } from './types';
import Link from 'next/link';
import StyledLink from '@src/components/atoms/StyledLink';
import NextArrow from '@src/components/icons/NextArrow';
import PrevArrow from '@src/components/icons/PrevArrow';
import clsx from 'clsx';

const PageNav = ({ prevLink, nextLink, className }: IPageNavProps) => (
  <div className={clsx(className && className)}>
    {prevLink ? (
      <div className="float-left">
        <Link href={prevLink} passHref>
          <StyledLink className="flex items-center">
            <PrevArrow width={20} height={20} className="mr-2" /> Prev
          </StyledLink>
        </Link>
      </div>
    ) : (
      <></>
    )}

    {nextLink ? (
      <div className="float-right">
        <Link href={nextLink} passHref>
          <StyledLink className="flex items-center">
            Next <NextArrow width={20} height={20} className="ml-2" />
          </StyledLink>
        </Link>
      </div>
    ) : (
      <></>
    )}
  </div>
);

export default PageNav;

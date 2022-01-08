import React from 'react';
import IIconProps from '@src/types/Icon';

const NextArrow = ({
  width = '100%',
  height = '100%',
  color = '#000',
  ...props
}: IIconProps) => (
  <svg
    viewBox="0 0 14 15"
    fill={color}
    width={width}
    height={height}
    className={props.className}
    style={{ maxWidth: width, maxHeight: height }}
    {...props}
  >
    <path
      d="M7.00704 13.002L12.654 7.35511C12.8493 7.15985 12.8493 6.84327 12.654 6.64801L7.00704 1.00091"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M11.9177 7.00165L1.00768 7.00158"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default NextArrow;

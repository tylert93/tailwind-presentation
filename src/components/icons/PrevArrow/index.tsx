import React from 'react';
import IIconProps from '@src/types/Icon';

const PrevArrowV2 = ({
  width = '100%',
  height = '100%',
  color = '#000',
  ...props
}: IIconProps) => (
  <svg
    viewBox="0 0 14 15"
    width={width}
    height={height}
    className={props.className}
    style={{ maxWidth: width, maxHeight: height }}
    {...props}
  >
    <path
      d="M7.00049 1.00126L1.3536 6.64643C1.15831 6.84165 1.15831 7.15826 1.3536 7.35357L7.00049 13.0013"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M2.08984 7.00046L12.9999 7.0004"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default PrevArrowV2;

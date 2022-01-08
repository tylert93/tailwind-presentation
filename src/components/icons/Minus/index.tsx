import React from 'react';
import IIconProps from '@src/types/Icon';

const Plus = ({
  width = '100%',
  height = '100%',
  color = '#000',
  ...props
}: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
    className={props.className}
    style={{ maxWidth: width, maxHeight: height }}
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
);

export default Plus;

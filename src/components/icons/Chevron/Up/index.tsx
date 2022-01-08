import React from 'react';
import IIconProps from '@src/types/Icon';

const Down = ({
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
    <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
  </svg>
);

export default Down;

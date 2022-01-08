import React from 'react';
import clsx from 'clsx';
import { IDotButtonProps } from './types';
import keyboardCleanser from '@src/utils/keycodeCleanser';
import Keycode from '@src/types/KeyCode';

const DotButton = ({
  disabled = false,
  selected,
  onClick,
  size = 'medium',
  color = 'primary',
}: IDotButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  const sizeClasses = {
    small: 'h-1.25 w-1.25 mx-0.5',
    medium: 'h-1.5 w-1.5 mx-0.75',
    large: 'h-1.75 w-1.75 mx-1',
  };

  const colorClasses = {
    primary: 'bg-primary-main',
    secondary: 'bg-secondary-main',
  };

  return (
    <button
      className={clsx(
        selected ? colorClasses[color] : 'bg-common-white',
        sizeClasses[size],
        selected ? 'cursor-default' : 'cursor-pointer',
        'rounded-50%'
      )}
      tabIndex={0}
      aria-label="select image"
      onKeyDown={(e) => {
        const key = keyboardCleanser(e);

        key === Keycode.Enter && handleClick();
      }}
      onClick={handleClick}
      data-testid={selected ? 'dot-button-selected' : 'dot-button'}
      disabled={selected}
    />
  );
};

export default DotButton;

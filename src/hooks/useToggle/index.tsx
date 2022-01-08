import { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState<boolean>(false);

  const isToggleOn = value;

  const toggleOn = () => setValue(true);

  const toggleOff = () => setValue(false);

  const toggle = () => setValue(!value);

  return {
    isToggleOn,
    toggleOn,
    toggleOff,
    toggle,
  };
};

export default useToggle;

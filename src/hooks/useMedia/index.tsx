import useMediaQuery from '../useMediaQuery';

const breakpoints = require('../../../theme/breakpoints');

const rawSM = parseFloat(breakpoints.sm);
const rawMD = parseFloat(breakpoints.md);

export const useMobile = () => useMediaQuery(`(max-width: ${rawSM - 1}px)`);

export const useOverMobile = () =>
  useMediaQuery(`(min-width: ${breakpoints.sm})`);

export const useTablet = () =>
  useMediaQuery(`(min-width: ${breakpoints.sm}), (max-width: ${rawMD - 1}px)`);

export const useUnderDesktop = () =>
  useMediaQuery(`(max-width: ${rawMD - 1}px)`);

export const useDesktop = () => useMediaQuery(`(min-width: ${breakpoints.md})`);

export const useLargeDesktop = () =>
  useMediaQuery(`(min-width: ${breakpoints.lg})`);

export const useIsMobileScreen = () =>
  useMediaQuery(
    `(max-width: ${rawSM - 1}px), (max-height: ${
      rawSM - 1
    }1px) and (orientation: landscape)`
  );

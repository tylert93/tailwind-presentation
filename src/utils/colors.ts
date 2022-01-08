const colors = require('@src/../theme/colors');

interface Colors {
  common: {
    black: '#000';
    white: '#fff';
  };
  primary: {
    main: '#ffc126';
    200: '#fff3d4';
    300: '#ffbc26';
    500: '#ffe093';
    700: '#ffd467';
  };
  secondary: {
    main: '#000a34';
    200: '#cdcfd7';
    500: '#80859a';
    700: '#4d5471';
    800: '#1A2348';
  };
  orange: {
    main: '#ff7900';
    200: '#ffe3cc';
    500: '#ffc799';
    700: '#FF9E4D';
  };
  blue: {
    main: '#3E7CB1';
    200: '#D7E5FA';
    500: '#8BB0D0';
    600: '#5185BC';
    700: '#6596C0';
  };
  teal: {
    main: '#66999B';
    200: '#E1EBEC';
    500: '#A3C2C3';
    700: '#85AEAF';
  };
  sageGreen: {
    main: '#B3AF8F';
    100: '#2A6264';
    200: '#F0EFE8';
    500: '#D9D7C7';
    700: '#CAC7B0';
  };
  gray: {
    main: '#222222';
    700: '#222222';
    600: '#4E4E4E';
    500: '#7A7A7A';
    400: '#BCBCBC';
    300: '#D3D3D3';
    200: '#E8E8E8';
    100: '#F5F5F5';
    50: '#fff';
    '50%': 'rgba(0,0,0,0.5)';
  };
  gold: {
    main: '#e5ddb4';
    400: '#c9c3a7';
  };
  error: {
    main: '#E10034';
    200: '#F9CCD6';
    100: '#FDEDF0';
  };
  warning: {
    200: '#FFF0CB';
    main: '#FFB400';
  };
  success: {
    main: '#519C51';
    200: '#DCEBDC';
  };
  info: {
    main: '#488AFF';
    200: '#DBE8FF';
  };
  background: {
    default: '#f5f5f5';
  };
  hyperlink: {
    main: '#0A589B';
  };
  text: {
    secondary: '#4D5471';
  };
  secretProperty: {
    main: '#3B6A9D';
    100: '#2E578A';
  };
  propertyPlayground: {
    main: '#AD006D';
  };
  sneakPeek: {
    main: '#2A6264';
  };
  chainMaker: {
    main: '#92D4D2';
    100: '#C8E9E8';
    200: '#6DB1AF';
  };
  matchMaker: {
    main: '#FF7900';
  };
  placeholderText: {
    main: '#B3B6C2';
  };
  divider: 'rgba(0, 0, 0, 0.12)';
  inherit: 'inherit';
}

const boominColors: Colors = {
  ...colors,
};

export default boominColors;

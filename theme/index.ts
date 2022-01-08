const BaseUnit = require('./baseUnit.ts');
const breakpoints = require('./breakpoints.ts');
const colors = require('./colors.ts');
const spacing = require('./spacing.ts');
const typography = require('./typography.ts');
const font = require('./font.ts');

// @ts-ignore
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/UI/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: breakpoints,
    colors,
    spacing,
    typography,
    borderRadius: {
      none: '0',
      xs: `${BaseUnit * 0.25}px`,
      sm: `${BaseUnit * 0.5}px`,
      DEFAULT: `${BaseUnit}px`,
      md: `${BaseUnit * 1.5}px`,
      lg: `${BaseUnit * 2}px`,
      full: '9999px',
      '50%': '50%',
    },
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    transitionDuration: {
      shortest: '150ms',
      shorter: '200ms',
      short: '250ms',
      standard: '300ms',
      complex: '375ms',
      long: '500ms',
      insane: '2000ms',
      enteringScreen: '225ms',
      leavingScreen: '195ms',
    },
    extend: {
      minHeight: {
        'fit-content': 'fit-content',
        ...spacing,
      },
      maxHeight: {
        'fit-content': '100%',
      },
      fontSize: {
        iconXS: ['16px', '16px'],
      },
      width: {
        '12/12': '100%',
      },
      maxWidth: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },

      transitionProperty: {
        height: 'max-height',
        position: 'left, right, top, bottom',
        visibility: 'visibility',
      },
    },
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
  },
  variants: {
    extend: {
      textColour: ['disabled'],
      borderWidth: ['disabled'],
      borderColor: ['disabled'],
      cursor: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};

const { colors, spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
      },
      colors: {
        'black-translucent': 'rgba(0, 0, 0, 0.8)',
        gray: {
          ...colors.gray,
          '50': '#FBFDFE',
          '150': '#F2F6FA',
        },
        red: {
          '50': '#fdedf0',
          '100': '#fbdbe1',
          '150': '#f8c8d2',
          '200': '#f6b6c3',
          '250': '#f4a4b5',
          '300': '#f292a6',
          '350': '#f08097',
          '400': '#ed6d88',
          '450': '#eb5b79',
          '500': '#e9496a',
          '550': '#d2425f',
          '600': '#ba3a55',
          '650': '#a3334a',
          '700': '#8c2c40',
          '750': '#752535',
          '800': '#5d1d2a',
          '850': '#461620',
          '900': '#2f0f15',
          '950': '#17070b',
        },
        blue: {
          '50': '#e8ecf3',
          '100': '#d1d8e6',
          '150': '#bac5da',
          '200': '#a3b2cd',
          '250': '#8c9fc1',
          '300': '#758bb4',
          '350': '#5e78a8',
          '400': '#47659b',
          '450': '#30518f',
          '500': '#193e82',
          '550': '#173875',
          '600': '#143268',
          '650': '#122b5b',
          '700': '#0f254e',
          '750': '#0d1f41',
          '800': '#0a1934',
          '850': '#071327',
          '900': '#050c1a',
          '950': '#02060d',
        },
        teal: {
          '50': '#f3f9fb',
          '100': '#e7f4f7',
          '150': '#dbeef3',
          '200': '#cfe8ef',
          '250': '#c4e3eb',
          '300': '#b8dde7',
          '350': '#acd7e3',
          '400': '#a0d1df',
          '450': '#94ccdb',
          '500': '#88c6d7',
          '550': '#7ab2c2',
          '600': '#6d9eac',
          '650': '#5f8b97',
          '700': '#527781',
          '750': '#44636c',
          '800': '#364f56',
          '850': '#293b40',
          '900': '#1b282b',
          '950': '#0e1415',
        },
      },
      spacing: {
        '1px': '1px',
        '1.5px': '1.5px',
        '2px': '2px',
        '2.5px': '2.5px',
        '3px': '3px',
        '4px': '4px',
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '256': '64rem',
        '512': '128rem',
        '1/2px': '0.6px',
        '1/2': '50%',
        '1/3': '33.333%',
        '2/3': '66.667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      inset: {
        '1/2': '50%',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      minWidth: {
        ...spacing,
      },
      maxHeight: {
        '4/5-screen': '80vh',
      },
      borderWidth: {
        '1.5': '1.5px',
        '2.5': '2.5px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '16': '16px',
      },
      boxShadow: {
        outline: `0 0 0 3px ${colors.teal[500]}7F`,
        'outline-red': `0 0 0 3px ${colors.red[500]}7F`,
        'outline-gray': `0 0 0 3px ${colors.gray[600]}7F`,
        'outline-dark-gray': `0 0 0 3px ${colors.gray[700]}7F`,
        'lg-up':
          '0 -10px 15px -3px rgba(0, 0, 0, .1), 0 -4px 6px -2px rgba(0, 0, 0, .05)',
      },
      fontSize: {
        xxs: '.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
    colorize: [
      'gray-300',
      'gray-500',
      'gray-700',
      'teal-300',
      'teal-500',
      'teal-700',
    ],
  },
  variants: {
    padding: ['responsive', 'first', 'last'],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'checked',
      'target',
      'group-hover',
    ],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'checked',
      'target',
    ],
    borderWidth: [
      'responsive',
      'hover',
      'focus',
      'active',
      'checked',
      'target',
    ],
    margin: ['responsive', 'focus', 'active', 'first'],
    boxShadow: ['hover', 'active', 'focus'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'target',
    ],
    hyphens: ['responsive'],
  },
  plugins: [
    // :checked variant
    function ({ addVariant, e }) {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked`;
        });
      });
    },
    // :target variant
    function ({ addVariant, e }) {
      addVariant('target', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`target${separator}${className}`)}:target`;
        });
      });
    },
  ],
};

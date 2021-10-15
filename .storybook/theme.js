import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // TINT: ebeced

  colorPrimary: '#f67900',
  colorSecondary: '#39464e',

  // UI
  appBg: '#f8f8f8',
  appContentBg: 'white',
  appBorderColor: '#39464e',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nexa Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#39464e',
  barBg: '#fff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Collabur DS',
  brandUrl: 'https://collabur.com',
  brandImage: './assets/images/collabur-logo.svg',
});

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-actions/register',
    'storybook-addon-paddings',
    {
      name: '@storybook/addon-docs/register',
      options: { configureJSX: true }
    },
    // './.storybook/addons/change-title/register.js',
    '@storybook/addon-docs/preset',
  ]
}

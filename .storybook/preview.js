import { configure, addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import theme from './theme';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/dist/blocks';
import { withPaddings } from 'storybook-addon-paddings';
// DS
// import '../dist/rds/rds';
// import '../dist/rds/rds.css';

addDecorator(withKnobs);
// addDecorator(withA11y);
addDecorator( withPaddings );
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS, defaultViewport: 'full' } });

addParameters({
  options: {
    theme,
  },
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
});

addParameters({
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

const loadFn = () => {
  const req = require.context('../src', true, /\.stories\.(mdx|tsx)$/);
  return req
    .keys()
    .map(fname => req(fname))
    .filter(exp => !!exp.default);
};

configure(loadFn, module);

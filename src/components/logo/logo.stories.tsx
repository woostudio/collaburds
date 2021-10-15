import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { select } from '@storybook/addon-knobs';
import { sizesOption } from '../../core/common';

storiesOf('Elements|Logo', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <cds-logo
      size="${select('Size', [...sizesOption], 'large')}"

    >
      <img src="https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/>
    </cds-logo>`;
  });

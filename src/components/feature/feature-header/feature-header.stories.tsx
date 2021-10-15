import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

storiesOf('Components|Feature', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Feature Header', () => {
    return `
    <cds-container>
      <cds-feature-header
        align="${select('Align', ['left', 'right', 'center'], 'center')}"
        size="${select('Size', ['', 'small', 'normal', 'medium', 'large'], 'normal')}"
      >
        <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
        <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
        <p slot="description">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </cds-feature-header>
    </cds-container>
    `;
  });

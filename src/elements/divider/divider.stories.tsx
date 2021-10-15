import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { text } from '@storybook/addon-knobs';

storiesOf('Elements|Divider', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <cds-divider
      class="${text('Class', '')}"
    >
    </cds-divider>`;
  });

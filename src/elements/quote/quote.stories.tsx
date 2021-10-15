import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Elements|Quote', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-quote
        class="${text('Class', '')}"
        footer="${text('Footer', 'Dr Phil')}"
      >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </cds-quote>
    `;
  });

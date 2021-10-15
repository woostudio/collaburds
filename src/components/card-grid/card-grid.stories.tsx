import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Components|Card', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Grid Card', () => {
    return `
      <cds-card-grid
        card-title="${text('Card Title', 'Card Title')}"
        card-description="${text('Card Description', 'Card Description with longer text.')}"
        link="${text('Link', 'http://www.qantas.com.au/')}"
        icon="${text('Icon', 'icon-cds-qantas-points')}"
        img="${text('Image', '')}"
      >
      </cds-card-grid>
    `;
  });

import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Buttons } from './buttons';

const sizes: { [key: string]: Buttons['size'] } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  none: undefined,
};

storiesOf('Elements|Buttons', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-buttons
        class="${text('Class', '')}"
        size="${select('Size', sizes, undefined)}"
        align="${select('Align', ['', 'center', 'right'], '')}"
        has-addons="${boolean('Has Addons', false)}"
      >
        <cds-button color="primary">Primary</cds-button>
        <cds-button color="danger">Danger</cds-button>
      </cds-buttons>
    `;
  });

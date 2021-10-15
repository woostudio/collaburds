import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Section } from './section';
import { colorsOption } from '../../core/common';

const sizes: { [key: string]: Section['size'] } = {
  medium: 'medium',
  large: 'large',
  small: 'small',
  none: undefined,
};

storiesOf('Layout|Section', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <cds-section
        class="${text('Class', '')}"
        size="${select('Size', sizes, null)}"
        background="${select('Background', ['', ...colorsOption], '')}"
        light="${boolean('Light', false)}"
      >
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one
            you're currently reading
          </h2>
        </div>
      </cds-section>
    `;
  });

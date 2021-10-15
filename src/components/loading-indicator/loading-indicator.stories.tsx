import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';
import { colorsOption } from '../../core/common';

storiesOf('Components|Loading Indicator', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <style>
      body{
        padding: 0!important;
      }
    </style>

      <cds-loading-indicator
        class="${text('Class', '')}"
        show="${boolean('Show', true)}"
        size="${select('Size', ['small', 'normal', 'medium', 'large'], 'normal')}"
        color="${select('Color', colorsOption, 'info')}"
        fullscreen="${boolean('Fullscreen', false)}"
      >
      </cds-loading-indicator>
    `;
  })
  .add('With Slot', () => {
    return `
      <cds-loading-indicator
        show="${boolean('Show', true)}"
        blur-content="${boolean('Blur Content', true)}"
        size="small"
      >
        <cds-message>
          <div class="message-header">
            <p>Hello World</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
            Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
            mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </cds-message>
      </cds-loading-indicator>
    `;
  });

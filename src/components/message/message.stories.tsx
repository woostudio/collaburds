import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import { colorsOption } from '../../core/common';

storiesOf('Components|Message', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-message
            color="${select('Color', colorsOption, null)}"
            size="${select(
              'Size',
              {
                small: 'small',
                medium: 'medium',
                large: 'large',
              },
              null
            )}"
          >
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
        </cds-container>
      </cds-section>
    `;
  })
  .add('Colors', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-message color="dark">
            <div class="message-header">
              <p>Dark</p>
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

          <cds-message color="primary">
            <div class="message-header">
              <p>Primary</p>
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

          <cds-message color="link">
            <div class="message-header">
              <p>Link</p>
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

          <cds-message color="info">
            <div class="message-header">
              <p>Info</p>
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

          <cds-message color="success">
            <div class="message-header">
              <p>Success</p>
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

          <cds-message color="warning">
            <div class="message-header">
              <p>Warning</p>
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

          <cds-message color="danger">
            <div class="message-header">
              <p>Danger</p>
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
        </cds-container>
      </cds-section>
    `;
  })
  .add('Message body only', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-message color="dark">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="primary">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="link">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="info">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="success">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="warning">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>

          <cds-message color="danger">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </cds-message>
        </cds-container>
      </cds-section>
    `;
  });

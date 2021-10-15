import { storiesOf } from '@storybook/html';
import { number, boolean, select, text, object } from '@storybook/addon-knobs';
import notes from './readme.md';
import { positionLocationsOptions } from '../../core/common';

storiesOf('Components|Toast', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    const toastEvent = new CustomEvent('addToast', {
      detail: object('Notification config', {
        heading: 'Test',
        text: 'Test body',
        'is-dismissable': true,
      }),
    });

    window['addToast'] = function() {
      window.dispatchEvent(toastEvent);
    };

    return `
      <cds-toast
        animate-in="${text('Animation in name', 'fadeIn')}"
        animate-out="${text('Animation out name', 'fadeOut')}"
        duration="${number('Duration of visibility', 5000)}"
        position="${select('Toast position', positionLocationsOptions, 'br')}"
        pause-on-hover="${boolean('Pause toast removal on hover', false)}"
      />
      <button class="button is-primary" onclick="addToast()">Add Toast</button>
    `;
  });

import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import { colorsOption } from '../../core/common';

storiesOf('Components|Cookie Consent', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-cookie-consent
        class="${text('Class', '')}"
        show="${boolean('Show', true)}"
        button-text="${text('Button Text', 'Got it')}"
        button-color="${select('Button Color', colorsOption, 'primary')}"
        position="${select(
          'Position',
          ['top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
          'bottom-right'
        )}"
        background="${select('Background', colorsOption, 'dark')}"
        accessible-label="${text('Accessible Label', 'Cookie Consent')}"
      >
        By using our site you agree to our use of cookies to deliver a better site experience.
      </cds-cookie-consent>
    `;
  });

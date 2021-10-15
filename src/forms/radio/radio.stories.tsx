import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Form|Input radio', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-radio radio-id="radio1" radio-name="radioGroup" checked>
            Yes
          </cds-radio>
          <cds-radio radio-id="radio2" radio-name="radioGroup">
            No
          </cds-radio>
          <cds-radio radio-id="radio3" radio-name="radioGroup">
            Maybe
          </cds-radio>
        </cds-container>
      </cds-section>
    `;
  });

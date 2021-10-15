import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean, text } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Input checkbox', module)
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
          <cds-checkbox
            checkbox-id="${text('Id', 'option1')}"
            checkbox-name="${text('Name', 'checkboxGroup1')}"
            checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
          >
            Remember me
          </cds-checkbox>
        </cds-container>
      </cds-section>
    `;
  })
  .add('With links', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-checkbox
          checkbox-id="${text('Id', 'option1')}"
          checkbox-name="${text('Name', 'checkboxGroup2')}"
          checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
            >
            I agree to the <a href="#">terms and conditions</a>
          </cds-checkbox>
        </cds-container>
      </cds-section>
    `;
  })
  .add('Checkbox group', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-checkbox
            checkbox-id="option1"
            checkbox-name="${text('Name', 'checkboxGroup3')}"
          >
            Unchecked
          </cds-checkbox>
          <cds-checkbox
            checkbox-id="option2"
            checkbox-name="${text('Name', 'checkboxGroup3')}"
            checked
          >
             Checked
          </cds-checkbox>
          <cds-checkbox
            checkbox-id="option3"
            checkbox-name="${text('Name', 'checkboxGroup3')}"
            disabled="true"
            >
              Disabled
          </cds-checkbox>
        </cds-container>
      </cds-section>
    `;
  });

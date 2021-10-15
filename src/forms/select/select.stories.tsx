import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean, text, select, optionsKnob as options } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Select', module)
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
            <cds-select
              select-id="selectId"
              label="${text('Label', 'Label')}"
              message="${text('Message', 'Please choose')}"
              state="${select(
                'State',
                {
                  hovered: 'hovered',
                  focused: 'focused',
                  'Not set': null,
                },
                null
              )}"
              size="${select(
                'Size',
                {
                  small: 'small',
                  normal: 'normal',
                  medium: 'medium',
                  large: 'large',
                  'Not set': null,
                },
                null
              )}"
              select-status="${options(
                'Select status',
                {
                  success: 'success',
                  danger: 'danger',
                },
                '',
                { display: 'inline-radio' }
              )}"
              rounded="${boolean('Rounded', false)}"
              loading="${boolean('Loading', false)}"
              multiple="${boolean('Multiple', false)}"
              icon="${text('Icon', '')}"
            >
              <option value="dropdown">Select dropdown</option>
              <option value="options">With options</option>
            </cds-select>
        </cds-container>
      </cds-section>
    `;
  });

import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean, text, select, optionsKnob as option } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Textarea', module)
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
            <cds-textarea
              id="${text('Id', 'textareaId')}"
              name="${text('Name', 'textareaName')}"
              message="${text('Message', 'Word count')}"
              label="${text('Label', 'Comments')}"
              placeholder="${text('Placeholder', 'What do you really think?')}"
              state="${select(
                'State',
                { hovered: 'hovered', focused: 'focused', 'Not set': null },
                null
              )}"
              textarea-status="${option(
                'Status',
                {
                  success: 'success',
                  danger: 'danger',
                },
                '',
                { display: 'inline-radio' }
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
              value="${text('Value', "I'm a textarea 🤘")}"
              control-class="${text('Control class', '')}"
              loading="${boolean('Loading', false)}"
              disabled="${boolean('Disabled', false)}"
              readonly="${boolean('Readonly', false)}"
              has-fixed-size="${boolean('Fixed size', false)}"
            >
            </cds-textarea>
        </cds-container>
      </cds-section>
    `;
  });

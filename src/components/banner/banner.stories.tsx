import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';
import { colorsOption, buttonColorsOption } from '../../core/common';

storiesOf('Components|Banner', module)
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

      <cds-banner
        class="${text('Class', '')}"
        show="${boolean('Show', true)}"
        position="${select(
          'Position',
          ['float-top', 'float-bottom', 'fixed-top', 'fixed-bottom'],
          'fixed-top'
        )}"
        color="${select('Color', colorsOption, 'info')}"
        light="${boolean('Light', false)}"
        action-text="${text('Action Text', 'Learn more')}"
        action-link="${text('Action Link', '')}"
        action-color="${select('Action Color', buttonColorsOption, 'white')}"
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </cds-banner>
    `;
  });

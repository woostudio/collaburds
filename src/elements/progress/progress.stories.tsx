import { storiesOf } from '@storybook/html';
import { select, number, text, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import { colorsOption } from '../../core/common';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  none: undefined,
};

const types = {
  bar: 'bar',
  circle: 'circle',
  lottie: 'lottie',
};

storiesOf('Elements|Progress', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-progress
            class="${text('Class', '')}"
            type="${select('Type', types, 'bar')}"
            lottie-path="${text('Lottie Path', '')}"
            color="${select('Color', colorsOption, undefined)}"
            size="${select('Size', sizes, null)}"
            max="${number('Max', 100)}"
            value="${number('Value', null)}"
            light="${boolean('Light', false)}"
            >
            </cds-progress>
        </cds-container>
      </cds-section>
    `;
  });

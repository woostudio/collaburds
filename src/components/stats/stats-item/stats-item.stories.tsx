import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import { colorsOption, typographySizeOption } from '../../../core/common';
import centered from '@storybook/addon-centered/html';

storiesOf('Components|Stats', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Stats Item', () => {
    return `
      <cds-stats-item
        class="${text('Class', '')}"
        metric="${text('Metric', 'Monthly')}"
        value-color="${select('Value Color', colorsOption, 'primary')}"
        value-size="${select('Value Size', typographySizeOption, '1')}"
        metric-size="${select('Metric Size', typographySizeOption, '6')}"
        metric-color="${select('Metric Color', colorsOption, 'text')}"
        align="${select('Align', ['left', 'right', 'center'], 'center')}"
        reversed="${boolean('Reversed', false)}"
        >
        100k+
      </cds-stats-item>
    `;
  });

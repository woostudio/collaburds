import { storiesOf } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { select, number } from '@storybook/addon-knobs';
import { colorsOption } from '../../core/common';

const placements = {
  auto: 'auto',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};
const triggers = {
  hover: 'hover',
  click: 'click',
};

storiesOf('Components|Tooltip', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Simple Tooltip', () => {
    return `<cds-tooltip
            placement="${select('Placement', placements, 'top')}"
            color="${select('Color', colorsOption, 'dark')}"
            offset="${number('Offset', 8)}"
            trigger="${select('Trigger', triggers, 'click')}"
            ">
            <div slot="tooltip-content">Tooltip content</div>
            <cds-button>Tooltip</cds-button>
        </cds-tooltip>`;
  })
  .add('Html Tooltip', () => {
    return `<cds-tooltip
            placement="${select('Placement', placements, 'top')}"
            color="${select('Color', colorsOption, 'dark')}"
            offset="${number('Offset', 8)}"
            trigger="${select('Trigger', triggers, 'click')}"
            ">
            <div slot="tooltip-content">
                <cds-input label="Search">
                </cds-input>
            </div>
            <cds-button>Tooltip</cds-button>
        </cds-tooltip>`;
  });

import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

storiesOf('Grid|Grid', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <cds-grid
      columns="${select(
        'Columns',
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        '12'
      )}"
      gap="${select('Gap', ['0', '1', '2', '3', '4', '5', '6', '7', '8'], '1')}"
      vertical-gap="${select('Vertical Gap', ['0', '1', '2', '3', '4', '5', '6', '7', '8'], '1')}"
      align="${select('Align', ['left', 'right', 'center'], 'left')}"
    >
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
      <cds-grid-item>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      </cds-grid-item>
    </cds-grid>
    `;
  });

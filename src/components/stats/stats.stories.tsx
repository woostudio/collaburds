import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import centered from '@storybook/addon-centered/html';
import { select, boolean } from '@storybook/addon-knobs';

storiesOf('Components|Stats', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Stats', () => {
    return `
    <div class="container" style="width:800px; max-width: 100vw;">
      <cds-stats
        no-border="${boolean('No Border', false)}"
        align="${select('Align', ['left', 'right', 'center'], 'center')}"
        simple="${boolean('Simple', false)}"
      >
        <cds-stats-item metric="New visits">2658</cds-stats-item>
        <cds-stats-item metric="Total users">1678</cds-stats-item>
        <cds-stats-item metric="Total page views">87509</cds-stats-item>
      </cds-stats>
    </div>
    `;
  });

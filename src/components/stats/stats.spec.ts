import { newSpecPage } from '@stencil/core/testing';
import { Stats } from './stats';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Stats],
    html: `
      <cds-stats>
        <cds-stats-item metric="New visits">2658</cds-stats-item>
        <cds-stats-item metric="Total users">1678</cds-stats-item>
        <cds-stats-item metric="Total page views">87509</cds-stats-item>
      </cds-stats>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-stats>
  <div class="align-center stats">
    <cds-box>
      <cds-stats-item metric="New visits">
        2658
      </cds-stats-item>
      <cds-stats-item metric="Total users">
        1678
      </cds-stats-item>
      <cds-stats-item metric="Total page views">
        87509
      </cds-stats-item>
    </cds-box>
  </div>
</cds-stats>
  `);
});
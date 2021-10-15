import { newSpecPage } from '@stencil/core/testing';
import { StatsItem } from './stats-item';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [StatsItem],
    html: `
      <cds-stats-item metric='Month'>
        100k+
      </cds-stats-item>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-stats-item metric="Month">
      <div class="align-center stats-item">
        <div class="stats-item-inner">
          <div class="has-text-primary is-size-1 stats-item-value">
            100k+
          </div>
          <h6 class="is-size-6 stats-item-metric">
            Month
          </h6>
        </div>
      </div>
    </cds-stats-item>
  `);
});
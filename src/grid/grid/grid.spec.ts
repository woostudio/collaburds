import { newSpecPage } from '@stencil/core/testing';
import { Grid } from './grid';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Grid],
    html: `
    <cds-grid>
      <div class="columns-1 columns-align-left gap-1 grid vertical-gap-1">
        <cds-grid-item>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </cds-grid-item>
        <cds-grid-item>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </cds-grid-item>
      </div>
    </cds-grid>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-grid>
      <div class="columns-1 columns-align-left gap-1 grid vertical-gap-1">
        <div class="columns-1 columns-align-left gap-1 grid vertical-gap-1">
          <cds-grid-item>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </cds-grid-item>
          <cds-grid-item>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </cds-grid-item>
        </div>
      </div>
    </cds-grid>
  `);
});
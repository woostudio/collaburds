import { newSpecPage } from '@stencil/core/testing';
import { GridItem } from './grid-item';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [GridItem],
    html: `
    <cds-grid-item>
      <div class="grid-item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </cds-grid-item>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-grid-item>
  <div class="grid-item">
    <div class="grid-item">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
</cds-grid-item>
  `);
});
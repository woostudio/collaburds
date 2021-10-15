import { newSpecPage } from '@stencil/core/testing';
import { Box } from '../box';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Box],
    html: `
      <cds-box>
        <p>Hello, I'm in a box!</p>
      </cds-box>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-box>
      <div class="box">
        <p>Hello, I'm in a box!</p>
      </div>
    </cds-box>
  `);
});

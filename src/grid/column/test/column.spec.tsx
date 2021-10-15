import { newSpecPage } from '@stencil/core/testing';
import { Column } from '../column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Column],
    html: `<cds-column>
             Hello, I'm in a column!
           </cds-column>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-column class="column">
        Hello, I'm in a column!
    </cds-column>
  `);
});

import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from '../checkbox';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Checkbox],
    html: `<cds-checkbox checked>No</cds-checkbox>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-checkbox checked>
        <input class="cds-checkbox" type="checkbox" checked />
        <label class="checkbox">No</label>
    </cds-checkbox>
  `);
});

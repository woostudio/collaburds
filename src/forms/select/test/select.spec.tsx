import { newSpecPage } from '@stencil/core/testing';
import { Select } from '../select';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Select],
    html: `
      <cds-select>
        <option>Select dropdown</option>
        <option>With options</option>
      </cds-select>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-select>
      <div class="field">
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    </cds-select>
  `);
});

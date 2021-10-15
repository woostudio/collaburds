import { newSpecPage } from '@stencil/core/testing';
import { Columns } from '../columns';
import { Column } from '../../column/column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Columns, Column],
    html: `<cds-columns>
             <cds-column>Hello, I'm in a column!</cds-column>
           </cds-columns>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-columns>
      <div class="columns">
        <cds-column class="column">
            Hello, I'm in a column!
        </cds-column>
      </div>
    </cds-columns>
  `);
});

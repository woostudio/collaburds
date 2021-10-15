import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../table';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Table],
    html: `
      <cds-table striped>
        <table></table>
      </cds-table>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-table striped>
      <div class="table is-striped">
        <table></table>
      </div>
    </cds-table>
  `);
});

import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Breadcrumb],
    html: `<cds-breadcrumb>
             <p>Hello, I'm in a breadcrumb!</p>
           </cds-br>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-breadcrumb>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <p>Hello, I'm in a breadcrumb!</p>
      </nav>
    </cds-breadcrumb>
  `);
});

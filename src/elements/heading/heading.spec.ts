import { newSpecPage } from '@stencil/core/testing';
import { Heading } from './heading';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Heading],
    html: `<cds-heading>
      My Heading
    </cds-heading>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-heading>
    <h6 class="has-text-weight-bold is-size-6 title">
      My Heading
    </h6>
  </cds-heading>
  `);
});

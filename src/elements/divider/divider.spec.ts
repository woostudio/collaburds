import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

it('Should render avatar with initials', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Divider],
    html: `
      <cds-divider></cds-divider>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-divider>
      <hr>
    </cds-divider>
  `);
});

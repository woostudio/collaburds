import { newSpecPage } from '@stencil/core/testing';
import { Tag } from '../tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tag],
    html: `<cds-tag>Hello World.</cds-tag>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-tag>
      <span class="tag">
        Hello World.
      </span>
    </cds-tag>
  `);
});

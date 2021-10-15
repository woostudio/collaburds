import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Content],
    html: `<cds-content size="large">
             <h2>Hello</h2>
           </cds-content>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-content size="large">
      <div class="content is-large">
        <h2>Hello</h2>
      </div>
    </cds-content>
  `);
});

import { newSpecPage } from '@stencil/core/testing';
import { Image } from '../image';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Image],
    html: `<cds-image size="32x32">
             <img src="" />
           </cds-image>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-image size="32x32">
      <figure class="image is-32x32">
        <img src="" />
      </figure>
    </cds-image>
  `);
});

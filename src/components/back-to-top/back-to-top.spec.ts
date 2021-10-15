import { newSpecPage } from '@stencil/core/testing';
import { BackToTop } from './back-to-top';

it('Should render direct video properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [BackToTop],
    html: `
      <cds-back-to-top float-position="bottom-right" icon="chevron-up" icon-color="primary">
        custom content
      </cds-back-to-top>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-back-to-top float-position="bottom-right" icon="chevron-up" icon-color="primary">
    <div class="back-to-top bottom-right float is-dark">
      <cds-icon icon="chevron-up" size="medium"></cds-icon>
      <div class="custom-content">
        custom content
      </div>
    </div>
  </cds-back-to-top>
  `);
});
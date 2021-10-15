import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Icon],
    html: `<cds-icon size="large" icon="camera">
           </cds-icon>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-icon class="icon is-large" icon="camera" size="large">
      <img class="cds-icon-img-svg" src="/assets/icons/camera.svg">
    </cds-icon>
  `);
});

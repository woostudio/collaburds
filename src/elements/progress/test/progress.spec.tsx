import { newSpecPage } from '@stencil/core/testing';
import { Progress } from '../progress';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Progress],
    html: `<cds-progress value="50"></cds-progress>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-progress value="50">
      <progress class="progress" max="100" value="50">50%</progress>
    </cds-progress>
  `);
});

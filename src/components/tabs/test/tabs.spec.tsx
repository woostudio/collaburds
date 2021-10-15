import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../tabs';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tabs],
    html: `
      <cds-tabs>
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </cds-tabs>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-tabs>
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
    </cds-tabs>
  `);
});

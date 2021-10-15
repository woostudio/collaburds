import { newSpecPage } from '@stencil/core/testing';
import { Tags } from '../tags';
import { Tag } from '../../tag/tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tags, Tag],
    html: `<cds-tags has-addons>
             <cds-tag>Hello</cds-tag>
             <cds-tag>World</cds-tag>
           </cds-tags>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-tags has-addons>
      <div class="tags has-addons">
        <cds-tag>
          <span class="tag">Hello</span>
        </cds-tag>
        <cds-tag>
          <span class="tag">World</span>
        </cds-tag>
      </div>
    </cds-tags>
  `);
});

import { newSpecPage } from '@stencil/core/testing';
import { Textarea } from '../textarea';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Textarea],
    html: `<cds-textarea placeholder="Hello World"></cds-textarea>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-textarea placeholder="Hello World">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Hello World"></textarea>
        </div>
      </div>
    </cds-textarea>
  `);
});

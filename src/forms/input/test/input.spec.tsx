import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Input],
    html: `<cds-input type="email"></cds-input>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-input type="email">
      <div class="field">
        <div class="control">
          <input class="input" type="email">
        </div>
      </div>
    </cds-input>
  `);

  expect(page.root.type).toBe('email');
});

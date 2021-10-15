import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Card],
    html: `<cds-card>
             <p>Hello, I'm in a card</p>
           </cds-card>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-card>
      <div class="card">
        <p>Hello, I'm in a card</p>
      </div>
    </cds-card>
  `);
});

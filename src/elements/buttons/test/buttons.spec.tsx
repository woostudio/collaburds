import { newSpecPage } from '@stencil/core/testing';
import { Buttons } from '../buttons';
import { Button } from '../../button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Buttons, Button],
    html: `<cds-buttons>
             <cds-button>Hello</cds-button>
           </cds-buttons>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-buttons>
      <div class="buttons">
        <cds-button>
          <button class="button">
            Hello
          </button>
        </cds-button>
      </div>
    </cds-buttons>
  `);
});

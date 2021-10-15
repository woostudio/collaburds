import { newSpecPage } from '@stencil/core/testing';
import { Container } from '../container';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Container],
    html: `<cds-container fluid>
             <p>Hello, I'm in a container!</p>
           </cds-container>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-container fluid>
      <div class="container is-fluid">
        <p>Hello, I'm in a container!</p>
      </div>
    </cds-container>
  `);
});

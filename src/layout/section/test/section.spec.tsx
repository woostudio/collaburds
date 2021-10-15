import { newSpecPage } from '@stencil/core/testing';
import { Section } from '../section';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Section],
    html: `<cds-section size="large">
             <p>Hello, I'm in a section!</p>
           </cds-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-section size="large">
      <div class="section is-large">
        <p>Hello, I'm in a section!</p>
      </div>
    </cds-section>
  `);
});

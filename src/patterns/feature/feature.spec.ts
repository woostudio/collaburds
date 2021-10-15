import { newSpecPage } from '@stencil/core/testing';
import { Feature } from './Feature';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Feature],
    html: `
    <cds-feature>
        <cds-feature-header slot="header">
          <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
          <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
          <p slot="description">Lorem ipsum dolor sit amet consect adipisicing elit.</p>
        </cds-feature-header>
        <div slot="body">
          body
        <div>
      </cds-feature>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-feature>
      <div class="feature layout-stack">
        <cds-feature-header slot="header">
          <cds-heading color="primary" size="6" slot="category" transform="uppercase">
            Transaction
          </cds-heading>
          <cds-heading size="4" slot="heading">
            A better way to send money
          </cds-heading>
          <p slot="description">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </p>
        </cds-feature-header>
        <div slot="body">
          body
          <div></div>
        </div>
      </div>
    </cds-feature>
  `);
});
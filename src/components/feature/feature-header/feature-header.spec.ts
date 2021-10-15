import { newSpecPage } from '@stencil/core/testing';
import { FeatureHeader } from './feature-header';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [FeatureHeader],
    html: `
    <cds-feature-header
        align="center"
        size="normal"
      >
        <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
        <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
        <p slot="description">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </cds-feature-header>
      `,
  });

  expect(page.root).toEqualHtml(`
  <cds-feature-header align="center" size="normal">
      <div class="align-center feature-header size-normal">
        <div class="feature-header-inner">
          <cds-heading color="primary" size="6" slot="category" transform="uppercase">
            Transaction
          </cds-heading>
          <cds-heading size="4" slot="heading">
            A better way to send money
          </cds-heading>
          <p slot="description">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
    </cds-feature-header>
  `);
});

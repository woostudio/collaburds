import { newSpecPage } from '@stencil/core/testing';
import { FeatureItem } from './feature-item';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [FeatureItem],
    html: `
    <div style="width:480px;">
    <cds-feature-item
      class=""
      heading="Transfers are instant" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
      icon="check"
      icon-color="secondary"
      icon-with-background="true"
      icon-inverted="false"
      icon-outlined="false"
      icon-light="false"
      layout="horizontal"
    >

    </cds-feature-item>
  </div>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-feature-item description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." heading="Transfers are instant" icon="check" icon-color="secondary" icon-inverted="false" icon-light="false" icon-outlined="false" icon-with-background="true" layout="horizontal">
  <div class="feature-item layout-horizontal">
    <div class="feature-item-icon icon-background is-secondary">
      <cds-icon icon="check"></cds-icon>
    </div>
    <div class="feature-item-content">
      <cds-heading size="6">
        Transfers are instant
      </cds-heading>
      <div class="feature-item-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
      </div>
    </div>
  </div>
</cds-feature-item>
  `);
});

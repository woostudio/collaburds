import { newSpecPage } from '@stencil/core/testing';
import { LoadingIndicator } from './loading-indicator';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [LoadingIndicator],
    html: `
    <cds-loading-indicator
    show="true"
    blur-content="true"
    size="small"
  >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </cds-loading-indicator>
    `,
  });

  page.root.displayDate = new Date(2020, 5, 1);

  expect(page.root).toEqualHtml(`
  <cds-loading-indicator blur-content="true" show="" size="small">
  <div class="blur-content is-info is-small loading-indicator show">
    <div class="loading-indicator-slot">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div class="loading-indicator-inner">
      <div class="loading-indicator-loader"></div>
    </div>
  </div>
</cds-loading-indicator>
  `);
});

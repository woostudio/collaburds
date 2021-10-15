import { newSpecPage } from '@stencil/core/testing';
import { Banner } from './banner';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Banner],
    html: `
    <cds-banner
      action-text="Learn more"
      action-link="example.com"
      action-color="white"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
    </cds-banner>
    `,
  });

  page.root.displayDate = new Date(2020, 5, 1);

  expect(page.root).toEqualHtml(`
  <cds-banner action-color="white" action-link="example.com" action-text="Learn more" show="">
      <div class="banner fixed-top show">
        <div class="banner-inner">
          <div class="banner-content">
            <div class="banner-icon">
              <cds-icon icon="check"></cds-icon>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </div>
          <div class="banner-action">
            <cds-button color="white" fullwidth="" href="example.com" tag="a">
              Learn more
            </cds-button>
          </div>
          <a class="banner-close" href="#">
            <cds-icon icon="x"></cds-icon>
          </a>
        </div>
      </div>
    </cds-banner>
  `);
});

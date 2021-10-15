import { newSpecPage } from '@stencil/core/testing';
import { Footer } from '../footer';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Footer],

    html: `
      <cds-footer
      class="custom-class"
      color="white"
      layout="content-right"
      disclaimer="Collabur Design System."
      disclaimerPosition="center"
      socialBelowContent="true"
    >
    <h6 class="mb-3">SUBSCRIBE TO OUR NEWSLETTER</h6>
    <cds-input label="The latest news, articles, and resources, sent to your inbox weekly."></cds-input>
    </cds-sec>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-footer class="custom-class" color="white" disclaimer="Collabur Design System." disclaimerposition="center" layout="content-right" socialbelowcontent="true">
      <footer class="content-right custom-class footer white">
        <div>
          <div class="footer-main">
            <div class="footer-slot">
              <h6 class="mb-3">
                SUBSCRIBE TO OUR NEWSLETTER
              </h6>
              <cds-input label="The latest news, articles, and resources, sent to your inbox weekly."></cds-input>
            </div>
            <div class="footer-columns"></div>
          </div>
          <div class="footer-divider"></div>
        </div>
        <div class="footer-disclaimer left">
          <div class="footer-disclaimer-text">
            Collabur Design System.
          </div>
          <div class="footer-disclaimer-social"></div>
        </div>
      </footer>
    </cds-footer>
  `);
});

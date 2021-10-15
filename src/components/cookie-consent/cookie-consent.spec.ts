import { newSpecPage } from '@stencil/core/testing';
import { CookieConsent } from './cookie-content';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [CookieConsent],
    html: `
      <cds-cookie-consent
        class="custom-class
        button-text="Got it"
        button-color="'primary'"
        position="bottom-right"
        background="dark"
        accessible-label="Cookie Consent"
      >
        By using our site you agree to our use of cookies to deliver a better site experience.
      </cds-cookie-consent>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-cookie-consent accessible-label="Cookie Consent" background="dark" button-color="'primary'" class="button-text= custom-class" got="" it"="" position="bottom-right">
    <div accessibility-label="Cookie Consent" class="button-text= cookie-consent custom-class is-dark position-bottom-right show">
      <div class="cookie-consent-content">
        By using our site you agree to our use of cookies to deliver a better site experience.
      </div>
      <div class="cookie-consent-action">
        <cds-button color="'primary'">
          Got it!
        </cds-button>
      </div>
    </div>
  </cds-cookie-consent>
  `);
});
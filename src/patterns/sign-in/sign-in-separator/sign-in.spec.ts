import { newSpecPage } from '@stencil/core/testing';
import { SignInSeparator } from './sign-in-separator';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [SignInSeparator],
    html: `<cds-sign-in-separator>Or continue with</cds-sign-in-separator>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-sign-in-separator>
      <div class="sign-in-separator">
        <div class="sign-in-separator-line"></div>
        <div class="sign-in-separator-text">
          Or continue with
        </div>
        <div class="sign-in-separator-line"></div>
      </div>
    </cds-sign-in-separator>
  `);
});

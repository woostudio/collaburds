import { newSpecPage } from '@stencil/core/testing';
import { SignIn } from './sign-in';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [SignIn],
    html: `
    <cds-sign-in
        heading="Sign In"
        size="normal"
        control-size="normal"
        username-label="Username"
        username-placeholder="Username"
        username-type="text"
        password-label="Password"
        password-placeholder="Password"
        remember-label="Remember me"
        forgot-password-label="Forgot password"
        botton-label="Sign in"
      >
        <cds-sign-in-separator>Or continue with</cds-sign-in-separator>
        <cds-columns>
          <cds-column>
            <cds-button color="light" fullwidth="true" outlined="true">
              <cds-icon icon="facebook" class="icon"></cds-icon>
            </cds-button>
          </cds-column>
          <cds-column>
            <cds-button color="light" fullwidth="true" outlined="true">
              <cds-icon icon="twitter" class="icon"></cds-icon>
            </cds-button>
          </cds-column>
          <cds-column>
            <cds-button color="light" fullwidth="true" outlined="true">
              <cds-icon icon="github" class="icon"></cds-icon>
            </cds-button>
          </cds-column>
        </cds-columns>
      </cds-sign-in>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-sign-in botton-label="Sign in" control-size="normal" forgot-password-label="Forgot password" heading="Sign In" password-label="Password" password-placeholder="Password" remember-label="Remember me" size="normal" username-label="Username" username-placeholder="Username" username-type="text">
      <div class="sign-in size-normal">
        <cds-box>
          <div class="sign-in-inner">
            <div class="sign-in-header">
              <cds-heading align="centered" size="4">
                Sign In
              </cds-heading>
            </div>
            <cds-input label="Username" message="" name="username" placeholder="Username" size="normal" type="text" value=""></cds-input>
            <cds-input label="Password" message="" name="password" placeholder="Password" size="normal" type="password" value=""></cds-input>
            <cds-columns class="sign-in-actions">
              <cds-column>
                <cds-checkbox checkboxid="ckRemeberMe" checkboxname="remember">
                  Remember me
                </cds-checkbox>
              </cds-column>
              <cds-column narrow="">
                <a href="#">
                  Forgot password
                </a>
              </cds-column>
            </cds-columns>
            <div class="sign-in-button">
              <cds-button color="primary" fullwidth="" size="normal">
                Sign in
              </cds-button>
            </div>
            <div class="sign-in-slot">
              <cds-sign-in-separator>
                Or continue with
              </cds-sign-in-separator>
              <cds-columns>
                <cds-column>
                  <cds-button color="light" fullwidth="true" outlined="true">
                    <cds-icon class="icon" icon="facebook"></cds-icon>
                  </cds-button>
                </cds-column>
                <cds-column>
                  <cds-button color="light" fullwidth="true" outlined="true">
                    <cds-icon class="icon" icon="twitter"></cds-icon>
                  </cds-button>
                </cds-column>
                <cds-column>
                  <cds-button color="light" fullwidth="true" outlined="true">
                    <cds-icon class="icon" icon="github"></cds-icon>
                  </cds-button>
                </cds-column>
              </cds-columns>
            </div>
          </div>
        </cds-box>
      </div>
    </cds-sign-in>
  `);
});

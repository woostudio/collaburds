import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { text, select, object } from '@storybook/addon-knobs';
import { signInBoxSizeOption } from '../../core/common';
import { SignInData } from './sign-in';

const signInData: SignInData = {
  username: '',
  password: '',
  remember: false,
};

storiesOf('Patterns|Sign In', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    const container: HTMLElement = document.createElement('div');
    container.innerHTML = `
      <cds-sign-in
        heading="${text('Heading', 'Sign In')}"
        size="${select('Box Size', signInBoxSizeOption, 'normal')}"
        control-size="${select(
          'Control Size',
          ['is-small', 'is-normal', 'is-medium', 'is-large'],
          'is-normal'
        )}"
        username-label="${text('Username Label', 'Username')}"
        username-placeholder="${text('Username Placeholder', 'Username')}"
        username-type="${select('Username Type', ['email', 'text', 'number'], 'text')}"
        password-label="${text('Password Label', 'Password')}"
        password-placeholder="${text('Password Placeholder', 'Password')}"
        remember-label="${text('Remember Label', 'Remember me')}"
        forgot-password-label="${text('Forgot Password Label', 'Forgot password?')}"
        botton-label="${text('Button Label', 'Sign in')}"
      >
      </cds-sign-in>
    `;
    const element = container.firstElementChild as any;
    element.currentData = object('Current Data', signInData);
    return container;
  })
  .add('With Social Login', () => {
    return `
      <cds-sign-in
        heading="Sign In"
        size="normal"
        control-size="is-normal"
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
      </cds-sign-in>
    `;
  });

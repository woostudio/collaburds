import { Component, h, Prop, ComponentInterface, Event, EventEmitter, State } from '@stencil/core';
import { signInBoxSizeProps } from '../../core/types';

export type SignInData = {
  username: string;
  password: string;
  remember: boolean;
};

/**
 * Sign In
 * @slot - Content
 * @category Blocks
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-sign-in',
  styleUrls: ['sign-in.scss'],
})
export class SignIn implements ComponentInterface {
  @State() data: SignInData = {
    username: '',
    password: '',
    remember: false,
  };
  @State() validationOn = false;

  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * size
   */
  @Prop() size: signInBoxSizeProps = 'normal';

  /**
   * control size
   */
  @Prop() controlSize: 'small' | 'normal' | 'medium' | 'large' = 'normal';

  /**
   * heading
   */
  @Prop() heading = 'Sign In';

  /**
   * username label
   */
  @Prop() usernameLabel = 'Username';

  /**
   * username placeholder
   */
  @Prop() usernamePlaceholder = 'Username';

  /**
   * username type
   */
  @Prop() usernameType: 'email' | 'text' | 'number' = 'text';

  /**
   * password label
   */
  @Prop() passwordLabel = 'Password';

  /**
   * password placeholder
   */
  @Prop() passwordPlaceholder = 'Password';

  /**
   * remember label
   */
  @Prop() rememberLabel = 'Remember me';

  /**
   * forgot password label
   */
  @Prop() forgotPasswordLabel = 'Forgot password?';

  /**
   * button label
   */
  @Prop() buttonLabel = 'Sign in';

  /**
   * current Data
   */
  @Prop() currentData: SignInData;

  /**
   * on forgot password clicked
   */
  @Event() forgotPasswordClicked: EventEmitter;

  /**
   * on form submit
   */
  @Event() formSubmit: EventEmitter;

  componentWillLoad() {
    // get current data
    if (this.currentData) {
      this.data = this.currentData;
    }
  }

  signInClickHandle = (e: CustomEvent) => {
    e.preventDefault();
    // validate
    this.validationOn = true;

    // emit
    this.formSubmit.emit(this.data);
  };

  forgotPWClickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.forgotPasswordClicked.emit();
  };
  changeHandle = (e: CustomEvent) => {
    const target = e.target as HTMLInputElement;
    const newValue: any = target.value;

    this.data = {
      ...this.data,
      [target.name]: newValue,
    };
  };
  changeCheckboxHandle = (e: CustomEvent) => {
    const target = (e.detail as Event).target as HTMLInputElement;
    const newValue: any = target.checked;

    this.data = {
      ...this.data,
      [target.name]: newValue,
    };
  };
  isDataValid = (name: string) => {
    return !this.validationOn || !!this.data[name];
  };

  render() {
    return (
      <div
        class={{
          'sign-in': true,
          [`size-${this.size}`]: Boolean(this.size),
        }}
      >
        <cds-box>
          <div class="sign-in-inner">
            {!!this.heading && (
              <div class="sign-in-header">
                <cds-heading size="4" align="centered">
                  {this.heading}
                </cds-heading>
              </div>
            )}
            <cds-input
              name="username"
              value={this.data.username}
              onInput={this.changeHandle}
              size={this.controlSize}
              label={this.usernameLabel}
              type={this.usernameType}
              placeholder={this.usernamePlaceholder}
              message={this.isDataValid('username') ? '' : `Please complete ${this.usernameLabel}`}
              inputStatus={this.isDataValid('username') ? undefined : 'danger'}
            ></cds-input>
            <cds-input
              name="password"
              value={this.data.password}
              onInput={this.changeHandle}
              type="password"
              size={this.controlSize}
              label={this.passwordLabel}
              placeholder={this.passwordPlaceholder}
              message={this.isDataValid('password') ? '' : `Please complete ${this.passwordLabel}`}
              inputStatus={this.isDataValid('password') ? undefined : 'danger'}
            ></cds-input>
            {(!!this.rememberLabel || !!this.forgotPasswordLabel) && (
              <cds-columns class="sign-in-actions">
                {!!this.rememberLabel && (
                  <cds-column>
                    <cds-checkbox
                      checkboxName="remember"
                      checked={this.data.remember}
                      checkboxId="ckRemeberMe"
                      onCdsInputChange={this.changeCheckboxHandle}
                    >
                      {this.rememberLabel}
                    </cds-checkbox>
                  </cds-column>
                )}
                <cds-column narrow={true}>
                  {!!this.forgotPasswordLabel && (
                    <a href="#" onClick={this.forgotPWClickHandle}>
                      {this.forgotPasswordLabel}
                    </a>
                  )}
                </cds-column>
              </cds-columns>
            )}
            <div class="sign-in-button">
              <cds-button
                color="primary"
                fullwidth={true}
                size={this.controlSize}
                onClicked={this.signInClickHandle}
              >
                {this.buttonLabel}
              </cds-button>
            </div>
            <div class="sign-in-slot">
              <slot></slot>
            </div>
          </div>
        </cds-box>
      </div>
    );
  }
}

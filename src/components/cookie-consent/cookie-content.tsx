import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Cookie Consent
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-cookie-consent',
  styleUrls: ['cookie-consent.scss'],
})
export class CookieConsent implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * show
   */
  @Prop({
    mutable: true,
  })
  show = true;

  /**
   * position
   */
  @Prop() position: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' =
    'bottom-right';

  /**
   * background
   */
  @Prop() background: colorProp = 'dark';

  /**
   * button text
   */
  @Prop() buttonText = 'Got it!';

  /**
   * button color
   */
  @Prop() buttonColor: colorProp = 'primary';

  /**
   * accessible label
   */
  @Prop() accessibleLabel = 'Cookie Consent';

  /**
   * confirm event
   */
  @Event() confirmed: EventEmitter;

  clickHandle = () => {
    this.confirmed.emit();
    this.show = false;
  };

  render() {
    return (
      <div
        class={{
          [this.class]: Boolean(this.class),
          'cookie-consent': true,
          [`is-${this.background}`]: Boolean(this.background),
          [`position-${this.position}`]: Boolean(this.position),
          [`show`]: this.show,
        }}
        accessibility-label={this.accessibleLabel}
      >
        <div class="cookie-consent-content">
          <slot></slot>
        </div>
        <div class="cookie-consent-action">
          <cds-button color={this.buttonColor} onClicked={this.clickHandle}>
            {this.buttonText}
          </cds-button>
        </div>
      </div>
    );
  }
}

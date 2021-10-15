import {
  Component,
  Prop,
  Event,
  EventEmitter,
  h,
  ComponentInterface,
  Element,
} from '@stencil/core';
import { notificationPositionProp, notificationTypeProp, iconProp } from '../../core/types';

export interface NotificationProp {
  notificationType: notificationTypeProp;
  heading: string;
  notificationId?: string;
  text?: string;
  bottomPosition?: string;
  topPosition?: string;
  headingIcon?: string;
  cta?: string;
  position?: notificationPositionProp;
  animated?: string;
  isDismissable?: boolean;
}

/**
 * Notification
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-notification',
  styleUrl: 'notification.scss',
})
export class Notification implements ComponentInterface {
  /**
   * ID
   */
  @Prop() notificationId: string;

  /**
   * Heading of the notification
   */
  @Prop() heading: string;

  /**
   * Text of the notification
   */
  @Prop() text: string;

  /**
   * Bottom placement in pixels (default is 0px)
   */
  @Prop() bottomPosition: string;

  /**
   * Top placement in pixels (default is 0px)
   */
  @Prop() topPosition: string;

  /**
   * Display as a toast notification with appropriate accessibility attributes
   */
  @Prop() toast = false;

  /**
   * Notification type
   */
  @Prop()
  notificationType: notificationTypeProp;

  /**
   * Notification position
   */
  @Prop()
  position: notificationPositionProp;

  /**
   * Notification position
   */
  @Prop() animated: string;

  /**
   * Notification content alignment
   */
  @Prop() alignContent: 'left' | 'right' | 'center' = 'center';

  /**
   * Is dismissable
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public dismissable: boolean;

  /**
   * Is dismissed
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public dismissed: boolean;

  /**
   * Rounded Corners
   */
  @Prop()
  rounded = true;

  /**
   * Heading icon (font awesome icon)
   */
  @Prop()
  icon: iconProp;

  // /**
  //  * Countdown timer
  //  */
  // @Prop()
  // countDownUtc: string;

  /**
   * Call to action label
   */
  @Prop() cta: string;

  /**
   * Call to action target
   */
  @Prop() ctaTarget: '_self' | '_blank' | 'emit' = 'emit';

  /**
   * Call to action URL
   */
  @Prop()
  ctaUrl: string;

  /**
   * Call to action type
   */
  @Prop()
  ctaType: notificationTypeProp = 'success';

  /**
   * This reduces the heading size two levels on mobile viewports
   */
  @Prop()
  responsiveHeading = true;

  /**
   * Triggers when the user selects the delete / close button
   */
  @Event() public notificationDismissed: EventEmitter;
  public handleDismissNotificationClick = () => {
    this.notificationDismissed.emit();
    this.dismissed = true;
  };

  /**
   * Triggers when the user clicks on CTA
   */
  @Event() public ctaClicked: EventEmitter;
  public handleCtaClick = () => {
    this.ctaClicked.emit(this.ctaUrl);
  };

  @Element() el: HTMLElement;

  componentWillLoad() {
    if (this.topPosition) {
      this.el.style.setProperty('--top-position', this.topPosition);
    }
    if (this.bottomPosition) {
      this.el.style.setProperty('--bottom-position', this.bottomPosition);
    }
  }

  render() {
    const notificationClass = `is-${this.notificationType}`;
    const ctaClass = `is-${this.ctaType}`;
    const positionClass = `is-${this.position}`;
    const animatedClass = `animated ${this.animated}`;
    const alignmentClass = `align-${this.alignContent}`;
    const toastProps = this.toast
      ? {
          'aria-live': 'assertive',
          'aria-atomic': 'true',
        }
      : {};

    return (
      <div class="cds-notification">
        <div
          class={{
            notification: true,
            [notificationClass]: !!this.notificationType,
            [positionClass]: !!this.position,
            [animatedClass]: !!this.animated,
            'is-hidden': this.dismissed,
            [alignmentClass]: !!this.alignContent,
            rounded: this.rounded,
          }}
          role="alert"
          {...toastProps}
        >
          {!!this.icon && (
            <div class="cds-notification-icon">
              <cds-icon icon={this.icon}></cds-icon>
            </div>
          )}
          <div class="cds-notification-content">
            {this.heading && (
              <h4
                class={{
                  'notification-heading': true,
                  'pr-7': this.dismissed && this.alignContent !== 'right',
                  'is-responsive-heading': this.responsiveHeading,
                }}
              >
                {this.heading}
              </h4>
            )}
            {this.text && <p>{this.text}</p>}
            <slot></slot>

            {/* {this.countDownUtc && <cds-countdown date-utc-to={this.countDownUtc}></cds-countdown>} */}
          </div>
          {this.cta && (
            <div class="notification-cta">
              {this.ctaTarget === 'emit' && (
                <cds-button onClick={this.handleCtaClick} color={this.ctaType}>
                  {this.cta}
                </cds-button>
              )}
              {this.ctaTarget !== 'emit' && (
                <a
                  href={this.ctaUrl}
                  target={this.ctaTarget}
                  onClick={this.handleCtaClick}
                  class={{
                    button: true,
                    [ctaClass]: true,
                  }}
                >
                  {this.cta}
                </a>
              )}
            </div>
          )}
          {this.dismissable && (
            <div
              onClick={this.handleDismissNotificationClick}
              class="notification-delete"
              data-dismiss={this.toast ? 'toast' : 'alert'}
              aria-label="Close"
            >
              <cds-icon icon="x"></cds-icon>
              <span class="is-sr-only">Close</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

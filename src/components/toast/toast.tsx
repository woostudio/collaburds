import { Component, h, ComponentInterface, Prop, Listen, Host, Element } from '@stencil/core';
import { NotificationProp } from '../notification/notification';
import { positionLocationsProp } from '../../core/types';

const defaultOptions = {
  duration: 5000,
  pauseOnHover: true,
  animate: {
    in: 'fadeIn',
    out: 'fadeOut',
  },
};

export interface ToastNotification {
  element: HTMLElement;
  duration: number;
  pauseOnHover?: boolean;
  animate?: ToastAnimate;
  notificationOptions: NotificationProp;
}

export interface ToastAnimate {
  in?: string;
  out?: string;
}

export class ToastNotification {
  constructor(initOptions) {
    const options = {
      ...defaultOptions,
      ...initOptions,
    };

    this.element = document.createElement('cds-notification');
    this.duration = options.duration;
    this.pauseOnHover = options.pauseOnHover;
    this.animate = options.animate;
    this.notificationOptions = options.notificationOptions;

    let timer;

    Object.entries(this.notificationOptions).forEach(([key, val]) => {
      if (key !== 'animated') {
        this.element.setAttribute(key, val.toString());
      }
    });

    if (this.duration && this.duration > 0) {
      timer = new ToastTimer(() => {
        this.destroy();
      }, this.duration);
    }

    if (this.animate && this.animate.in) {
      this.element.setAttribute('animated', this.animate.in);
    }

    if (this.pauseOnHover) {
      this.element.addEventListener('mouseenter', () => {
        timer.pause();
      });
      this.element.addEventListener('mouseleave', () => {
        timer.resume();
      });
    }
  }

  destroy() {
    if (this.animate && this.animate.out) {
      this.element.setAttribute('animated', this.animate.out);
      this.onAnimationEnd(() => this.removeChild(this.element));
    } else {
      this.removeChild(this.element);
    }
  }

  removeChild(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  onAnimationEnd(callback = () => {}) {
    const target = this.element.querySelector('.notification');
    target.addEventListener('animationend', () => callback());
  }
}

export interface ToastTimer {
  timer: number;
  start: Date;
  remaining: number;
  callback: Function;
}

export class ToastTimer {
  constructor(callback, delay) {
    this.timer;
    this.start;
    this.remaining = delay;
    this.callback = callback;

    this.resume();
  }

  pause() {
    window.clearTimeout(this.timer);
    this.remaining = this.remaining - (+new Date() - +this.start);
  }

  resume() {
    this.start = new Date();
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(this.callback, this.remaining);
  }
}

/**
 * Toast
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-toast',
  styleUrl: 'toast.scss',
})
export class Toast implements ComponentInterface {
  /**
   * Root component element
   */
  @Element() el: HTMLElement;

  /**
   * Position of toast notifications
   */
  @Prop() position: positionLocationsProp = 'br';

  /**
   * Toast in animation
   */
  @Prop() animateIn = '';

  /**
   * Toast out animation
   */
  @Prop() animateOut = '';

  /**
   * Duration before toast is removed
   */
  @Prop() duration = 5000;

  /**
   * Pause toast removal while hovered?
   */
  @Prop() pauseOnHover = false;

  /**
   * Listen for addToast event and add toast
   */
  @Listen('addToast', { target: 'window' })
  handleShowToast(event: CustomEvent) {
    // Create toast
    const options = {
      notificationOptions: {
        ...event.detail,
        'is-toast': true,
      },
      animate: {
        in: this.animateIn,
        out: this.animateOut,
      },
      duration: this.duration,
      pauseOnHover: this.pauseOnHover,
    };

    const notification = new ToastNotification(options);

    this.el.querySelector('.cds-toast-container').appendChild(notification.element);
  }

  public render(): Element {
    return (
      <Host>
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          class={{
            'cds-toast-container': true,
            [this.position]: true,
          }}
        ></div>
      </Host>
    );
  }
}

import { Component, Prop, h, Host, Element, ComponentInterface } from '@stencil/core';
import lottie from 'lottie-web/build/player/lottie_light';
import { colorProp } from '../../core/types';

/**
 * Progress
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-progress',
  styleUrls: ['progress.scss'],
})
export class Progress implements ComponentInterface {
  private circleValueElement: SVGCircleElement;
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Value
   */
  @Prop() value: number;

  /**
   * Maximum value
   */
  @Prop() max = 100;

  /**
   * Color
   */
  @Prop() color: colorProp = 'light';

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * type
   */
  @Prop() type: 'circle' | 'lottie' | 'bar' = 'bar';

  /**
   * type
   */
  @Prop() lottiePath: string;

  /**
   * Light
   */
  @Prop() light: boolean;

  @Element() el: HTMLElement;

  componentDidLoad() {
    // calculate circle percentage
    if (this.type === 'circle') {
      let percent = 0.3;
      if (this.max > 0 && this.value) {
        percent = this.value / this.max;
      }

      const radius = this.circleValueElement.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      this.circleValueElement.style.strokeDasharray = `${circumference} ${circumference}`;
      this.circleValueElement.style.strokeDashoffset = `${circumference}`;

      const offset = circumference - percent * circumference;
      this.circleValueElement.style.strokeDashoffset = offset.toString();
    }

    // init lottie
    if (this.type === 'lottie' && !!this.lottiePath) {
      lottie.loadAnimation({
        container: this.el.getElementsByClassName('lottie-wrapper')[0],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: this.lottiePath,
        rendererSettings: {
          viewBoxOnly: true,
        },
      });
    }
  }

  render() {
    return (
      <Host>
        {this.type === 'bar' && (
          <progress
            class={{
              progress: true,
              [`is-${this.color}`]: Boolean(this.color),
              [`is-${this.size}`]: Boolean(this.size),
              [this.class]: Boolean(this.class),
              'is-light': this.light,
            }}
            value={this.value}
            max={this.max}
          >
            {typeof this.value === 'number' && `${this.value}%`}
          </progress>
        )}
        {this.type === 'circle' && (
          <div
            class={{
              'circular-loader': true,
              [`is-${this.color}`]: Boolean(this.color),
              [`is-${this.size}`]: Boolean(this.size),
              [this.class]: Boolean(this.class),
              'is-light': this.light,
              indeterminate: isNaN(this.value),
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <circle class="background" cx="12" cy="12" r="9"></circle>
              <circle
                class="value"
                cx="12"
                cy="12"
                r="9"
                ref={ref => {
                  this.circleValueElement = ref as SVGCircleElement;
                }}
              ></circle>
            </svg>
          </div>
        )}

        {this.type === 'lottie' && <div class="lottie-wrapper"></div>}
      </Host>
    );
  }
}

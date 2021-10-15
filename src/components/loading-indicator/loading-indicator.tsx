import { Prop, h, Component, ComponentInterface } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Loading Indicator
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-loading-indicator',
  styleUrls: ['loading-indicator.scss'],
})
export class LoadingIndicator implements ComponentInterface {
  /**
   * CSS Class
   */
  @Prop() class: string;

  /**
   * Show
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  show = true;

  /**
   * Size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large' = 'normal';

  /**
   * Color
   */
  @Prop() color: colorProp = 'info';

  /**
   * Fullscreen
   */
  @Prop() fullscreen: boolean;

  /**
   * Blur Content: show loading spinner over content slot
   */
  @Prop() blurContent: boolean;

  render() {
    return (
      <div
        class={{
          'loading-indicator': true,
          [this.class]: Boolean(this.class),
          [`is-${this.size}`]: Boolean(this.size),
          [`is-${this.color}`]: Boolean(this.color),
          fullscreen: this.fullscreen,
          show: this.show,
          'blur-content': this.blurContent,
        }}
      >
        <div class="loading-indicator-slot">
          <slot></slot>
        </div>
        <div class="loading-indicator-inner">
          <div class="loading-indicator-loader"></div>
        </div>
      </div>
    );
  }
}

import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Section
 * @slot - Content
 * @category Layout
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-section',
  styleUrls: ['section.scss'],
})
export class Section implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  /**
   * Section size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * background
   */
  @Prop() background: colorProp;

  /**
   * Light
   */
  @Prop() light: boolean;

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            section: true,
            [`is-${this.size}`]: Boolean(this.size),
            [this.class]: Boolean(this.class),
            [`is-${this.background}`]: Boolean(this.background),
            'is-light': this.light,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}

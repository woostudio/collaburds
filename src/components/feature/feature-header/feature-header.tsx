import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Feature Header
 * @slot category - Category content
 * @slot heading - Heading content
 * @slot description - Heading content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-feature-header',
  styleUrls: ['feature-header.scss'],
})
export class FeatureHeader implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * align
   */
  @Prop() align: 'left' | 'right' | 'center' = 'center';

  /**
   * size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large';

  render() {
    return (
      <div
        class={{
          'feature-header': true,
          [`align-${this.align}`]: Boolean(this.align),
          [`size-${this.size}`]: Boolean(this.size),
          [this.class]: Boolean(this.class),
        }}
      >
        <div class="feature-header-inner">
          <slot name="category"></slot>
          <slot name="heading"></slot>
          <slot name="description"></slot>
        </div>
      </div>
    );
  }
}

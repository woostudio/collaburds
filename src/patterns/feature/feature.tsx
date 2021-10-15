import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Feature
 * @slot header - Header Content
 * @slot body - Body Content
 * @category Blocks
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-feature',
  styleUrls: ['feature.scss'],
})
export class Feature implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * layout
   */
  @Prop() layout: 'left' | 'right' | 'stack' = 'stack';

  render() {
    return (
      <div
        class={{
          feature: true,
          [`layout-${this.layout}`]: Boolean(this.layout),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot name="header"></slot>
        <slot name="body"></slot>
      </div>
    );
  }
}

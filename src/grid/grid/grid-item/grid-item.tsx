import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Grid Item
 * @slot - Content
 * @category Grid
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-grid-item',
})
export class GridItem implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  render() {
    return (
      <div
        class={{
          'grid-item': true,
          [this.class]: Boolean(this.class),
        }}
      >
        <slot></slot>
      </div>
    );
  }
}

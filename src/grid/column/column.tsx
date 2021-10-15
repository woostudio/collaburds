import { Component, Prop, h, Host, ComponentInterface } from '@stencil/core';
import { columnSizes } from "../../core/types";

/**
 * Column
 * @slot - Content
 * @category Grid
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-column',
})
export class Column implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Sizes
   */
  @Prop() size: columnSizes;

  /**
   * Narrow column
   */
  @Prop() narrow: boolean;

  render() {
    return (
      <Host
        class={{
          column: true,
          'is-narrow': this.narrow,
          [this.class]: Boolean(this.class),
          [`is-${this.size}`]: Boolean(this.size),
        }}
      >
        <slot />
      </Host>
    );
  }
}

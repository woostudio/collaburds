import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Grid
 * @slot - Content
 * @category Grid
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-grid',
  styleUrls: ['grid.scss'],
})
export class Grid implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Number of Columns
   */
  @Prop() columns: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = '1';

  /**
   * Gap
   */
  @Prop() gap: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' = '1';

  /**
   * Vertical Gap
   */
  @Prop() verticalGap: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' = '1';

  /**
   * align
   */
  @Prop() align: 'left' | 'right' | 'center' = 'left';

  render() {
    return (
      <div
        class={{
          grid: true,
          [`columns-${this.columns}`]: Boolean(this.columns),
          [`gap-${this.gap}`]: Boolean(this.gap),
          [`vertical-gap-${this.verticalGap}`]: Boolean(this.verticalGap),
          [`columns-align-${this.align}`]: Boolean(this.align),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot></slot>
      </div>
    );
  }
}

import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Stats
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-stats',
  styleUrls: ['stats.scss'],
})
export class Stats implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Is No Border
   */
  @Prop() noBorder: boolean;

  /**
   * Simple Layout
   */
  @Prop() simple: boolean;

  /**
   * Align
   */
  @Prop() align: 'left' | 'right' | 'center' = 'center';

  render() {
    return (
      <div
        class={{
          stats: true,
          [this.class]: Boolean(this.class),
          'no-border': this.noBorder,
          [`align-${this.align}`]: Boolean(this.align),
          'layout-simple': this.simple,
        }}
      >
        <cds-box>
          <slot></slot>
        </cds-box>
      </div>
    );
  }
}

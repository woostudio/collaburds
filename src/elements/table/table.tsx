import { Component, Prop, h, ComponentInterface } from '@stencil/core';

/**
 * Table
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-table',
  styleUrls: ['table.scss'],
})
export class Table implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Bordered
   */
  @Prop() bordered = false;

  /**
   * Striped
   */
  @Prop() striped = false;

  /**
   * Scrollable
   */
  @Prop() scrollable = false;

  /**
   * Narrow
   */
  @Prop() narrow = false;

  /**
   * Hoverable
   */
  @Prop() hoverable = false;

  /**
   * Fullwidth
   */
  @Prop() fullwidth = false;

  render() {
    const table = (
      <div
        class={{
          table: true,
          [this.class]: Boolean(this.class),
          'is-bordered': this.bordered,
          'is-striped': this.striped,
          'is-narrow': this.narrow,
          'is-hoverable': this.hoverable,
          'is-fullwidth': this.fullwidth,
        }}
      >
        <slot />
      </div>
    );
    return this.scrollable ? <div class="table-container">{table}</div> : table;
  }
}

import { Component, Prop, h, ComponentInterface } from '@stencil/core';

/**
 * Divider
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-divider',
  styleUrls: ['divider.scss'],
})
export class Divider implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  render() {
    return (
      <hr
        class={{
          [this.class]: Boolean(this.class),
        }}
      ></hr>
    );
  }
}

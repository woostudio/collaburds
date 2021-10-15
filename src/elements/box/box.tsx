import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Box
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-box',
  styleUrls: ['box.scss'],
})
export class Box implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div
        class={{
          box: true,
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </div>
    );
  }
}

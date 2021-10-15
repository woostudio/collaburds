import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Tags
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-tags',
  styleUrls: ['tags.scss'],
})
export class Tags implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Size
   */
  @Prop() size: 'medium' | 'large';

  /**
   * Has addons
   */
  @Prop() hasAddons = false;

  render(): JSX.Element {
    return (
      <div
        class={{
          tags: true,
          'has-addons': this.hasAddons,
          [`are-${this.size}`]: Boolean(this.size),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </div>
    );
  }
}

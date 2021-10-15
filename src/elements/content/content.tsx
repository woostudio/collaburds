import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

/**
 * Content
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-content',
  styleUrls: ['content.scss'],
})
export class Content implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Content size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            content: true,
            [`is-${this.size}`]: Boolean(this.size),
            [this.class]: Boolean(this.class),
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}

import { Component, ComponentInterface, Prop, Host, h, JSX } from '@stencil/core';

/**
 * Buttons
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-buttons',
  styleUrls: ['buttons.scss'],
})
export class Buttons implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  /**
   * Buttons size
   */
  @Prop() public size: 'small' | 'medium' | 'large';

  /**
   * Attach buttons together
   */
  @Prop() public hasAddons = false;

  /**
   * Attached button alignment
   */
  @Prop() public align: 'center' | 'right';

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            buttons: true,
            [`is-${this.align}`]: Boolean(this.align),
            [`are-${this.size}`]: Boolean(this.size),
            [this.class]: Boolean(this.class),
            'has-addons': this.hasAddons,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}

import { Component, Prop, h, ComponentInterface, Host } from '@stencil/core';

/**
 * Logo
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-logo',
  styleUrls: ['logo.scss'],
})
export class Logo implements ComponentInterface {
  /**
   * Logo's colour
   */
  @Prop() colour: string;

  /**
   * Logo's size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large' | 'extra-large' = 'normal';

  /**
   * Logo's alignment
   */
  @Prop() alignment: string;

  render() {
    return (
      <Host
        class={{
          [`is-${this.size}`]: !!this.size,
          [this.colour]: !!this.colour,
          [this.alignment]: !!this.alignment,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}

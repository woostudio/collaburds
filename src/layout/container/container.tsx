import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Container
 * @slot - Content
 * @category Layout
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-container',
  styleUrls: ['container.scss'],
})
export class Container implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Container breakpoint
   */
  @Prop() breakpoint: 'desktop' | 'widescreen' | 'fullhd';

  /**
   * Fluid container
   */
  @Prop() fluid = false;

  render(): JSX.Element {
    return (
      <div
        class={{
          container: true,
          'is-fluid': this.fluid,
          [`is-${this.breakpoint}`]: Boolean(this.breakpoint),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </div>
    );
  }
}

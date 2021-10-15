import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Breadcrumb
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-breadcrumb',
  styleUrls: ['breadcrumb.scss'],
})
export class Breadcrumb implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Breadcrumb alignment
   */
  @Prop() align: 'centered' | 'right';

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Separator
   */
  @Prop() separator:
    | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';

  render(): JSX.Element {
    return (
      <nav
        class={{
          breadcrumb: true,
          [`is-${this.size}`]: Boolean(this.size),
          [this.separator]: Boolean(this.separator),
          [`is-${this.align}`]: Boolean(this.align),
          [this.class]: Boolean(this.class),
        }}
        aria-label="breadcrumbs"
      >
        <slot />
      </nav>
    );
  }
}

import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

/**
 * Pagination
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-pagination',
  styleUrls: ['pagination.scss'],
})
export class Pagination implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Pagination size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Alignment
   */
  @Prop() align: 'centered' | 'right';

  /**
   * Rounded
   */
  @Prop() rounded = false;

  render(): JSX.Element {
    return (
      <Host>
        <nav
          class={{
            pagination: true,
            [`is-${this.size}`]: Boolean(this.size),
            [`is-${this.align}`]: Boolean(this.align),
            'is-rounded': this.rounded,
            [this.class]: Boolean(this.class),
          }}
          role="navigation"
          aria-label="pagination"
        >
          <slot />
        </nav>
      </Host>
    );
  }
}

import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

/**
 * Tabs
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-tabs',
  styleUrls: ['tabs.scss'],
})
export class Tabs implements ComponentInterface {
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
   * Style
   */
  @Prop() tabStyle: 'boxed' | 'toggle';

  /**
   * Rounded
   */
  @Prop() rounded = false;

  /**
   * Full width
   */
  @Prop() fullwidth = false;

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            tabs: true,
            [`is-${this.size}`]: Boolean(this.size),
            [`is-${this.align}`]: Boolean(this.align),
            [`is-${this.tabStyle}`]: Boolean(this.tabStyle),
            'is-fullwidth': this.fullwidth,
            'is-toggle-rounded': this.rounded && this.tabStyle === 'toggle',
            [this.class]: Boolean(this.class),
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}

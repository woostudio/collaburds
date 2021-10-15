import { Component, Prop, h, JSX, Host, ComponentInterface } from '@stencil/core';
import { columnGapProps } from '../../core/types';

/**
 * Columns
 * @slot - Content
 * @category Grid
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-columns',
  styleUrls: ['columns.scss'],
})
export class Columns implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Centered
   */
  @Prop() centered = false;

  /**
   * Mobile
   */
  @Prop() mobile = false;

  /**
   * Desktop
   */
  @Prop() desktop = false;

  /**
   * Multiline
   */
  @Prop() multiline = false;

  /**
   * Gapless
   */
  @Prop() gapless = false;

  /**
   * Vertically centered
   */
  @Prop() vcentered = false;

  /**
   * Columns gaps
   */
  @Prop() gaps: columnGapProps;

  render(): JSX.Element {
    return (
      <Host
        class={{
          columns: true,
          'is-centered': this.centered,
          'is-mobile': this.mobile,
          'is-desktop': this.desktop,
          'is-multiline': this.multiline,
          'is-gapless': this.gapless,
          'is-vcentered': this.vcentered,
          'is-variable': Boolean(this.gaps),
          [`is-${this.gaps}`]: Boolean(this.gaps),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </Host>
    );
  }
}

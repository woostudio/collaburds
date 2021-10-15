import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Card Header
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card-header',
})
export class CardHeader implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <header class="card-header">
        <slot></slot>
      </header>
    );
  }
}

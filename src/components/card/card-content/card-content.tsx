import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Card Content
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card-content',
})
export class CardContent implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div class="card-content">
        <slot></slot>
      </div>
    );
  }
}

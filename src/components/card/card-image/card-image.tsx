import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Card Image
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card-image',
})
export class CardImage implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div class="card-image">
        <slot></slot>
      </div>
    );
  }
}

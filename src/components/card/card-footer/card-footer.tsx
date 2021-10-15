import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Card Footer
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card-footer',
})
export class CardFooter implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <footer class="card-footer">
        <slot></slot>
      </footer>
    );
  }
}

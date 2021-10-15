import { Component, h, ComponentInterface, Prop } from '@stencil/core';

/**
 * Quote
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-quote',
  styleUrls: ['quote.scss'],
})
export class Quote implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Footer
   */
  @Prop() footer;

  render() {
    return (
      <cds-content class={this.class}>
        <blockquote>
          <slot></slot>
          {!!this.footer && <footer class="quote-footer">{this.footer}</footer>}
        </blockquote>
      </cds-content>
    );
  }
}

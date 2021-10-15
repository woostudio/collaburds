import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Card
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card',
  styleUrls: ['card.scss'],
})
export class Card implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div
        class={{
          card: true,
          [this.class]: Boolean(this.class),
        }}
      >
        <slot></slot>
      </div>
    );
  }
}

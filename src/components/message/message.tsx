import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Message
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-message',
  styleUrls: ['message.scss'],
})
export class Message implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  render(): JSX.Element {
    return (
      <article
        class={{
          message: true,
          [`is-${this.color}`]: Boolean(this.color),
          [`is-${this.size}`]: Boolean(this.size),
        }}
      >
        <slot />
      </article>
    );
  }
}

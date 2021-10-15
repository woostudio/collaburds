import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Tag
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-tag',
  styleUrls: ['tag.scss'],
})
export class Tag implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Tag
   */
  @Prop() tag: 'span' | 'div' | 'a' | 'button' = 'span';

  /**
   * Link href
   */
  @Prop() href = '';

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Is light color variant
   */
  @Prop() light = false;

  /**
   * Size
   */
  @Prop() size: 'normal' | 'medium' | 'large';

  /**
   * Is rounded
   */
  @Prop() rounded = false;

  /**
   * Is delete
   */
  @Prop() delete = false;

  render(): JSX.Element {
    const TagType = this.tag;

    return (
      <TagType
        class={
          {
            tag: true,
            [`is-${this.color}`]: Boolean(this.color),
            [`is-${this.size}`]: Boolean(this.size),
            [this.class]: Boolean(this.class),
            'is-light': this.light,
            'is-rounded': this.rounded,
            'is-delete': this.delete,
          } as any
        }
        href={this.tag === 'a' ? this.href : null}
        type={this.tag === 'button' ? 'button' : null}
      >
        <slot></slot>
      </TagType>
    );
  }
}

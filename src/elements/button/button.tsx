import { Component, Prop, h, JSX, ComponentInterface, Event, EventEmitter } from '@stencil/core';
import { buttonColorProp } from '../../core/types';

/**
 * Button
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-button',
  styleUrls: ['button.scss'],
})
export class Button implements ComponentInterface {
  /**
   * Element tag to render
   */
  @Prop() tag: 'a' | 'button' | 'input' = 'button';

  /**
   * Button or input type
   */
  @Prop() type: 'submit' | 'reset' | 'button';

  /**
   * Link href
   */
  @Prop() href = '';

  /**
   * Is disabled?
   */
  @Prop() disabled = false;

  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Color
   */
  @Prop() color: buttonColorProp;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large' | 'normal';

  /**
   * Display the button in full-width
   */
  @Prop() fullwidth = false;

  /**
   * Is outlined
   */
  @Prop() outlined = false;

  /**
   * Is light color variant
   */
  @Prop() light = false;

  /**
   * Is inverted
   */
  @Prop() inverted = false;

  /**
   * Rounded button
   */
  @Prop() rounded = false;

  /**
   * Hovered state
   */
  @Prop() hovered = false;

  /**
   * Focused state
   */
  @Prop() focused = false;

  /**
   * Active state
   */
  @Prop() active = false;

  /**
   * Loading state
   */
  @Prop() loading = false;

  /**
   * on button clicked event
   */
  @Event() clicked: EventEmitter;

  clickHandler = () => {
    this.clicked.emit();
  };

  render(): JSX.Element {
    const TagType = this.tag;
    const props = {
      class: {
        button: true,
        [`is-${this.color}`]: Boolean(this.color),
        [`is-${this.size}`]: Boolean(this.size),
        'is-fullwidth': this.fullwidth,
        'is-active': this.active,
        'is-focused': this.focused,
        'is-hovered': this.hovered,
        'is-inverted': this.inverted,
        'is-rounded': this.rounded,
        'is-loading': this.loading,
        'is-outlined': this.outlined,
        'is-light': this.light,
        [this.class]: Boolean(this.class),
      },
      disabled: this.disabled,
      ariaDisabled: this.disabled ? 'true' : null,
      href: this.tag === 'a' ? this.href : null,
      type: this.tag === 'input' || this.tag === 'button' ? this.type : null,
    };

    return (
      <TagType {...props} onClick={this.clickHandler}>
        <slot />
      </TagType>
    );
  }
}

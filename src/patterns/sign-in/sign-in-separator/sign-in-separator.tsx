import { Component, h, Prop, ComponentInterface } from '@stencil/core';

/**
 * Sign In Separator
 * @slot - Content
 * @category Patterns
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-sign-in-separator',
})
export class SignInSeparator implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;
  render() {
    return (
      <div class="sign-in-separator">
        <div class="sign-in-separator-line"></div>
        <div class="sign-in-separator-text">
          <slot></slot>
        </div>
        <div class="sign-in-separator-line"></div>
      </div>
    );
  }
}

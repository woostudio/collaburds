import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Field
 * @slot - Content
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-field',
  styleUrls: ['field.scss'],
})
export class Field implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Label
   */
  @Prop() label: string;

  /**
   * Help or error message
   */
  @Prop() message: string;

  /**
   * Has addons
   */
  @Prop() hasAddons = false;

  /**
   * Field size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large';

  /**
   * Horizontal field
   */
  @Prop() horizontal = false;

  /**
   * Grouped field
   */
  @Prop() grouped = false;

  /**
   * Grouped, on multiline
   */
  @Prop() groupedMultiline = false;

  render(): JSX.Element {
    const fieldClass = {
      field: true,
      'has-addons': this.hasAddons,
      'is-horizontal': this.horizontal,
      'is-grouped': this.grouped,
      'is-grouped-multiline': this.groupedMultiline,
      [this.class]: Boolean(this.class),
    };
    if (this.horizontal) {
      return (
        <div class={fieldClass}>
          <div
            class={{
              'field-label': true,
              [`is-${this.size}`]: Boolean(this.size),
            }}
          >
            <label class="label">{this.label}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <slot />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class={fieldClass}>
          <label class="label">{this.label}</label>
          <slot />
          {this.message && (
            <p
              class={{
                help: true,
              }}
            >
              {this.message}
            </p>
          )}
        </div>
      );
    }
  }
}

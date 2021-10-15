import {
  Component,
  Prop,
  h,
  Host,
  ComponentInterface,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';

/**
 * Checkbox
 * @slot - Content
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-checkbox',
  styleUrls: ['checkbox.scss'],
})
export class Checkbox implements ComponentInterface {
  /**
   * Id
   */
  @Prop() checkboxId;

  /**
   * Name
   */
  @Prop() checkboxName;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Label classes
   */
  @Prop() labelClass = '';

  /**
   * Checked
   */
  @Prop() checked = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * cdsInputChange event, contains change from input
   */
  @Event() cdsInputChange: EventEmitter;

  /**
   * Listen for and emit 'change' event
   */
  @Listen('change')
  handleChange(event: Event) {
    this.cdsInputChange.emit(event);
  }

  /**
   * cdsInputFocusIn event - focusin event from input
   */
  @Event() cdsInputFocusIn: EventEmitter;

  /**
   * Listen for and emit FocusEvent
   */
  @Listen('focusin')
  handleFocusIn(event: FocusEvent) {
    this.cdsInputFocusIn.emit(event);
  }

  /**
   * cdsInputFocusOut event - focusout event in Input
   */
  @Event() cdsInputFocusOut: EventEmitter;

  /**
   * Listen for and emit FocusEvent
   */
  @Listen('focusout')
  handleFocusOut(event: FocusEvent) {
    this.cdsInputFocusOut.emit(event);
  }

  render() {
    return (
      <Host>
        <input
          id={this.checkboxId}
          name={this.checkboxName}
          type="checkbox"
          class={{
            ['cds-checkbox']: true,
            [this.class]: Boolean(this.class),
          }}
          disabled={this.disabled}
          checked={this.checked}
        />
        <label
          htmlFor={this.checkboxId}
          class={{
            checkbox: true,
            [this.labelClass]: Boolean(this.labelClass),
          }}
        >
          <slot></slot>
        </label>
      </Host>
    );
  }
}

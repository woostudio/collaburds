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
 * Radio
 * @slot - Content
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-radio',
  styleUrls: ['radio.scss'],
})
export class Radio implements ComponentInterface {
  /**
   * Id
   */
  @Prop() radioId: string;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Label Classes
   */
  @Prop() labelClass = '';

  /**
   * Name
   */
  @Prop() radioName: string;

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
          id={this.radioId}
          name={this.radioName}
          type="radio"
          class={{
            ['cds-radio']: true,
            [this.class]: Boolean(this.class),
          }}
          disabled={this.disabled}
          checked={this.checked}
        />
        <label
          htmlFor={this.radioId}
          class={{
            radio: true,
            [this.labelClass]: Boolean(this.labelClass),
          }}
        >
          <slot />
        </label>
      </Host>
    );
  }
}

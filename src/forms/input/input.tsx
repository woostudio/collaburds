import {
  Component,
  Prop,
  Host,
  h,
  ComponentInterface,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
import { FieldLabel } from '../field-label/field-label';

/**
 * Input
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-input',
  styleUrls: ['input.scss'],
  shadow: false,
})
export class Input implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Control Classes eg. has-icons
   */
  @Prop() controlClass = '';

  /**
   * Placeholder
   */
  @Prop() placeholder: string;

  /**
   * Value
   */
  @Prop() value: string | number;

  /**
   * Type
   */
  @Prop() type: 'text' | 'number' | 'email' | 'password' | 'date' = 'text';

  /**
   * Size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large';

  /**
   * State
   */
  @Prop() state: 'hovered' | 'focused';

  /**
   * Name
   */
  @Prop() name = '';

  /**
   * Required
   */
  @Prop() required = false;

  /**
   * Disabled state
   */
  @Prop() disabled = false;

  /**
   * The input will look similar to a normal one, but is not editable and has no shadow
   */
  @Prop() readonly = false;

  /**
   * Rounded
   */
  @Prop() rounded = false;

  /**
   * Loading state
   */
  @Prop() loading = false;

  /**
   * Removes the background, border, shadow, and horizontal padding
   */
  @Prop() static = false;

  /**
   * inputAttributes - adds custom attributes to the input field
   * declared attributes will be overridden
   */
  @Prop() inputAttributes = null;

  /**
   * Unique id (used in input and label)
   */
  @Prop() inputId: string;

  /**
   * Label for input
   */
  @Prop() label: string;

  /**
   * Message
   */
  @Prop() message: string;

  /**
   * Input status
   */
  @Prop() inputStatus: 'success' | 'danger';

  /**
   * cdsInput event - InputEvent from input
   */
  @Event() cdsInput: EventEmitter;

  /**
   * List for and emit InputEvent
   */
  @Listen('input')
  handleScroll(event: InputEvent) {
    this.cdsInput.emit(event);
  }

  /**
   * cdsInputChange event - ChangeEvent from input
   */
  @Event() cdsInputChange: EventEmitter;

  /**
   * Listen for and emit ChangeEvent from event
   */
  @Listen('change')
  handleChange(event: InputEvent) {
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
        <div class="field">
          {!!this.label && (
            <FieldLabel size={this.size} labelFor={this.inputId} label={this.label} />
          )}
          <div
            class={{
              control: true,
              'is-loading': this.loading,
              [this.controlClass]: Boolean(this.controlClass),
            }}
          >
            <input
              id={this.inputId}
              class={{
                input: true,
                [`is-${this.size}`]: Boolean(this.size),
                [`is-${this.state}`]: Boolean(this.state),
                'is-rounded': this.rounded,
                'is-static': this.static,
                [this.class]: Boolean(this.class),
                [`is-${this.inputStatus}`]: Boolean(this.inputStatus),
              }}
              placeholder={this.placeholder}
              required={this.required}
              disabled={this.disabled}
              readonly={this.readonly}
              name={this.name}
              type={this.type}
              value={this.value}
              {...this.inputAttributes}
            />
            {Boolean(this.message) && (
              <p
                class={{
                  help: true,
                  [`is-${this.inputStatus}`]: Boolean(this.inputStatus),
                }}
              >
                {this.message}
              </p>
            )}
          </div>
        </div>
      </Host>
    );
  }
}

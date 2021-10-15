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
import { FieldLabel } from '../field-label/field-label';

/**
 * Textarea
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-textarea',
  styleUrls: ['textarea.scss'],
})
export class Textarea implements ComponentInterface {
  /**
   * Unique id (used in textarea and label)
   */
  @Prop() textareaId: string;

  /**
   * Name
   */
  @Prop() textareaName: string;

  /**
   * Label
   */
  @Prop() label: string;

  /**
   * Message
   */
  @Prop() message: string;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Control class
   */
  @Prop() controlClass = '';

  /**
   * Value
   */
  @Prop() value: string | number;

  /**
   * Placeholder
   */
  @Prop() placeholder: string;

  /**
   * Text area status
   */
  @Prop() textareaStatus: 'success' | 'danger';

  /**
   * Size
   */
  @Prop() size: 'small' | 'normal' | 'medium' | 'large';

  /**
   * State
   */
  @Prop() state: 'hovered' | 'focused';

  /**
   * Readonly state
   */
  @Prop() readonly = false;

  /**
   * Disabled state
   */
  @Prop() disabled = false;

  /**
   * Loading state
   */
  @Prop() loading = false;

  /**
   * Fixed size
   */
  @Prop() hasFixedSize = false;

  /**
   * Rows
   */
  @Prop() rows: number;

  /**
   * cdsInputChange event, contains change from input
   */
  @Event() cdsTextareaChange: EventEmitter;

  /**
   * Listen for and emit 'change' event
   */
  @Listen('change')
  handleChange(event: Event) {
    this.cdsTextareaChange.emit(event);
  }
  
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

  render() {
    return (
      <Host>
        <div class="field">
          {!!this.label && (
            <FieldLabel size={this.size} labelFor={this.textareaName} label={this.label} />
          )}
          <div
            class={{
              control: true,
              'is-loading': this.loading,
              [this.controlClass]: Boolean(this.controlClass),
            }}
          >
            <textarea
              id={this.textareaId}
              name={this.textareaName}
              placeholder={this.placeholder}
              class={{
                textarea: true,
                'has-fixed-size': this.hasFixedSize,
                [`is-${this.textareaStatus}`]: Boolean(this.textareaStatus),
                [`is-${this.size}`]: Boolean(this.size),
                [`is-${this.state}`]: Boolean(this.state),
                [this.class]: Boolean(this.class),
              }}
              disabled={this.disabled}
              readonly={this.readonly}
            >
              {this.value}
            </textarea>
            {Boolean(this.message) && (
              <p
                class={{
                  help: true,
                  [this.textareaStatus]: Boolean(this.textareaStatus),
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

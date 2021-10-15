import {
  Prop,
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Element,
  Method,
  Listen,
  Host,
} from '@stencil/core';
import moment from 'moment';
import { stringToDateString, stringToDate } from '../../../core/services';

/**
 * Calendar Input
 * @slot - Trigger Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-calendar-input',
  styleUrls: ['calendar-input.scss'],
})
export class CalendarInput implements ComponentInterface {
  /**
   * Show Calendar
   */
  @Prop({
    reflect: true,
    mutable: true,
  })
  show: boolean;

  /**
   * Format
   */
  @Prop() format = 'L';

  /**
   * Placeholder
   */
  @Prop() placeholder: string;

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
   * value
   */
  @Prop({
    reflect: true,
    mutable: true,
  })
  value: string;

  /**
   * On date selected
   */
  @Event() selected: EventEmitter;

  /**
   * Set Date
   * @param value date
   */
  @Method()
  async setDate(value: Date) {
    this.value = moment(value).format(this.format);
  }

  @Element() el: HTMLElement;

  /**
   * Close calendar if click outsite
   */
  @Listen('click', {
    target: 'document',
  })
  documentClickHandle(e: MouseEvent) {
    // close when clicking outsite
    if (!this.el.contains(e.target as HTMLElement)) {
      this.show = false;
    }
  }
  selectHandle = (e: CustomEvent) => {
    // set input
    this.value = moment(e.detail).format(this.format);
    this.selected.emit(e.detail);
    this.show = false;
  };
  changeAltHandle = (e: CustomEvent) => {
    const target = (e.detail as Event).target as HTMLInputElement;
    this.value = stringToDateString(target.value, this.format, this.format);
    target.value = this.value;
    this.show = false;
  };
  changeOriginalHandle = (e: CustomEvent) => {
    const target = (e.detail as Event).target as HTMLInputElement;
    this.value = stringToDateString(target.value, 'YYYY-MM-DD', this.format);
    target.value = this.value;
  };

  render() {
    return (
      <Host>
        {/* Alternative input: for desktop custom calendar */}
        <div class="calendar-input-alt">
          <cds-input
            type="text"
            name={this.name}
            required={this.required}
            disabled={this.disabled}
            readonly={this.readonly}
            rounded={this.rounded}
            loading={this.loading}
            static={this.static}
            inputAttributes={this.inputAttributes}
            inputId={this.inputId}
            label={this.label}
            message={this.message}
            inputStatus={this.inputStatus}
            size={this.size}
            onCdsInputFocusIn={() => {
              this.show = true;
            }}
            value={this.value}
            onCdsInputChange={this.changeAltHandle}
          ></cds-input>
        </div>
        {/* Original input: use native calendar */}
        <div class="calendar-input">
          <cds-input
            type="date"
            name={this.name}
            required={this.required}
            disabled={this.disabled}
            readonly={this.readonly}
            rounded={this.rounded}
            loading={this.loading}
            static={this.static}
            inputAttributes={this.inputAttributes}
            inputId={this.inputId}
            label={this.label}
            message={this.message}
            inputStatus={this.inputStatus}
            size={this.size}
            value={stringToDateString(this.value, this.format, 'YYYY-MM-DD')}
            onCdsInputChange={this.changeOriginalHandle}
          ></cds-input>
        </div>
        {this.show && (
          <cds-calendar-container
            currentDate={stringToDate(this.value, this.format)}
            onSelected={this.selectHandle}
          ></cds-calendar-container>
        )}
      </Host>
    );
  }
}

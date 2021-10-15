import {
  Component,
  Prop,
  h,
  ComponentInterface,
  Host,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
import { FieldLabel } from '../field-label/field-label';
import { colorProp, iconProp } from '../../core/types';

/**
 * Select
 * @slot - Content
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-select',
  styleUrls: ['select.scss'],
})
export class Select implements ComponentInterface {
  /**
   * Select id
   */
  @Prop() selectId: string;

  /**
   * Select name
   */
  @Prop() selectName: string;

  /**
   * Label for select
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
   * Control classes
   */
  @Prop() controlClass = '';

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * State
   */
  @Prop() state: 'hovered' | 'focused';

  /**
   * Allows multiple selection
   */
  @Prop() multiple = false;

  /**
   * Loading state
   */
  @Prop() loading = false;

  /**
   * Rounded
   */
  @Prop() rounded = false;

  /**
   * Icon
   */
  @Prop() icon: iconProp;

  /**
   * Select status
   */
  @Prop() selectStatus: 'success' | 'danger';

  /**
   * cdsInputChange event, contains change from input
   */
  @Event() cdsSelectChange: EventEmitter;

  /**
   * Listen for and emit 'change' event
   */
  @Listen('change')
  handleChange(event: Event) {
    this.cdsSelectChange.emit(event);
  }

  render() {
    return (
      <Host>
        <div class="field">
          {!!this.label && (
            <FieldLabel size={this.size} labelFor={this.selectId} label={this.label} />
          )}
          <div
            class={{
              control: true,
              'has-icons-left': Boolean(this.icon),
              [this.controlClass]: Boolean(this.controlClass),
            }}
          >
            <div
              class={{
                select: true,
                [`is-${this.selectStatus}`]: Boolean(this.selectStatus),
                [`is-${this.size}`]: Boolean(this.size),
                [this.class]: Boolean(this.class),
                'is-multiple': this.multiple,
                'is-rounded': this.rounded,
                'is-loading': this.loading,
              }}
            >
              <select
                id={this.selectId}
                name={this.selectName}
                multiple={this.multiple}
                class={{
                  [this.state]: Boolean(this.state),
                }}
              >
                <slot />
              </select>
            </div>
            {Boolean(this.icon) && (
              <div class="icon is-left">
                <cds-icon icon={this.icon} size={this.size} />
              </div>
            )}
          </div>

          {Boolean(this.message) && (
            <p
              class={{
                help: true,
                [`is-${this.selectStatus}`]: Boolean(this.selectStatus),
              }}
            >
              {this.message}
            </p>
          )}
        </div>
      </Host>
    );
  }
}

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
import { stringToDate } from '../../core/services';

/**
 * Calendar
 * @slot - Trigger Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-calendar',
  styleUrls: ['calendar.scss'],
})
export class Calendar implements ComponentInterface {
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
  clickHanle = (e: MouseEvent) => {
    e.preventDefault();
    this.show = true;
  };
  render() {
    return (
      <Host>
        <div onClick={this.clickHanle}>
          <slot></slot>
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

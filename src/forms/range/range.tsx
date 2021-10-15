import { Component, Prop, h, ComponentInterface, Event, EventEmitter } from '@stencil/core';
import { FieldLabel } from '../field-label/field-label';

/**
 * Range
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-range',
  styleUrls: ['range.scss'],
})
export class Range implements ComponentInterface {
  private inputElement: HTMLInputElement;
  private bubbleElement: HTMLElement;
  private rangeFillElement: HTMLElement;
  private rangeValueElement: HTMLElement;

  /**
   * label
   */
  @Prop() label: string;

  /**
   * Value
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  value = 0;

  /**
   * min
   */
  @Prop() min = 0;

  /**
   * max
   */
  @Prop() max = 100;

  /**
   * step
   */
  @Prop() step = 1;

  /**
   * On Tick
   */
  @Event() ticked: EventEmitter;

  /**
   * On Change
   */
  @Event() changed: EventEmitter;
  componentDidLoad() {
    this.updateBubblePosition();
  }
  updateBubblePosition = () => {
    const value = Number(this.inputElement.value);
    const percentage = (value - this.min) / (this.max - this.min);
    const totalWidth = this.inputElement.clientWidth - this.bubbleElement.clientWidth;
    const offset = percentage * totalWidth;
    this.bubbleElement.style.left = `${offset}px`;
    this.rangeFillElement.style.width = `${percentage * 100}%`;
    this.rangeValueElement.textContent = value.toString();

    this.ticked.emit({
      value,
    });
  };

  inputHandle = () => {
    this.updateBubblePosition();
  };
  changeHandle = () => {
    this.updateBubblePosition();
    this.changed.emit({
      value: this.value,
    });
  };

  render() {
    return (
      <div>
        <div class="range-header">
          <div class="range-label">
            {!!this.label && <FieldLabel size="normal" labelFor="" label={this.label} />}
          </div>
          <div class="range-value" ref={ref => (this.rangeValueElement = ref)}></div>
        </div>
        <div class="range-wrap">
          <div class="range-inner">
            <div class="range-fill" ref={ref => (this.rangeFillElement = ref)}></div>
            <input
              type="range"
              class="range"
              min="0"
              onInput={this.inputHandle}
              onChange={this.changeHandle}
              max={this.max}
              step={this.step}
              value={this.value}
              ref={ref => (this.inputElement = ref)}
            />
            <output class="bubble" ref={ref => (this.bubbleElement = ref)}></output>
          </div>
        </div>
      </div>
    );
  }
}

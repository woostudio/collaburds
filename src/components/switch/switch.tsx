import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Element,
  ComponentInterface,
  Listen,
} from '@stencil/core';

/**
 * Swith
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-switch',
  styleUrl: 'switch.scss',
})
export class Switch implements ComponentInterface {
  /**
   * Switch is triggered
   */
  @Event() public selectSwitch: EventEmitter;

  /**
   * Unique id of the switch
   */
  @Prop() switchId: string;

  /**
   * Name
   */
  @Prop() name: string;

  /**
   * Is outlined
   */
  @Prop() outlined = false;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Switch is disabled
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public disabled: boolean;

  /**
   * Switch is checked
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public checked: boolean;

  @Element() el: HTMLElement;

  /**
   * cdsSwitchChange event, contains change from input
   */
  @Event() cdsSwitchChange: EventEmitter;

  /**
   * Listen for and emit 'change' event
   */
  @Listen('change')
  handleChange(event: Event) {
    const inputEl: HTMLInputElement = this.el.querySelector(`#${this.switchId}`);
    this.checked = inputEl.checked;
    this.cdsSwitchChange.emit(event);
  }

  render() {
    const isOutlinedClass = `is-outlined`;

    return (
      <Host>
        <div class="field">
          <div class="control">
            <input
              class={{
                'switch is-rounded is-success': true,
                [isOutlinedClass]: this.outlined,
                [`is-${this.size}`]: Boolean(this.size),
              }}
              id={this.switchId}
              type="checkbox"
              name={this.name}
              checked={this.checked}
              disabled={this.disabled}
            />
            <label htmlFor={this.switchId}>
              <slot />
            </label>
          </div>
        </div>
      </Host>
    );
  }
}

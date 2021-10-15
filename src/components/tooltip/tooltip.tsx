import { Component, Prop, h, ComponentInterface, State, Host } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core';
import { tooltipPlacementProp, tooltipTriggerProp, colorProp } from '../../core/types';

/**
 * Tooltip
 * @slot - Content
 * @slot tooltip-content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-tooltip',
  styleUrls: ['tooltip.scss'],
})
export class Tooltip implements ComponentInterface {
  private popoverElement?: HTMLElement;
  private triggerElement?: HTMLElement;
  private popoverInstance?: Instance;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Tooltip offset
   */
  @Prop() offset = 8;

  /**
   * Tooltip placement
   */
  @Prop() placement: tooltipPlacementProp = 'auto';

  /**
   * Tooltip color
   */
  @Prop() color: colorProp;

  /**
   * Tooltip trigger
   */
  @Prop() trigger: tooltipTriggerProp = 'hover';

  @State() show = false;

  componentDidRender() {
    const options = {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, this.offset],
          },
        },
        {
          name: 'flip',
          options: {
            boundariesElement: 'scrollParent',
            behavior: ['top', 'bottom', 'right'],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundariesElement: 'viewport',
          },
        },
      ],
    };
    if (this.placement !== 'auto') {
      options['placement'] = this.placement;
    }
    this.popoverInstance = createPopper(this.triggerElement, this.popoverElement, options);

    // close tooltip if clicking outside
    window.addEventListener('mousedown', this.handleWindowClick);
  }

  disconnectedCallback() {
    if (this.popoverInstance) {
      this.popoverInstance.destroy();
      this.popoverInstance = null;
    }
  }
  private handleWindowClick = (e: MouseEvent) => {
    if (this.trigger === 'click') {
      if (
        !this.triggerElement.contains(e.target as HTMLElement) &&
        !this.popoverElement.contains(e.target as HTMLElement)
      ) {
        this.show = false;
      }
    }
  };
  private handleMouseEnter = () => {
    if (this.trigger === 'hover') this.show = true;
  };

  private handleMouseOut = () => {
    if (this.trigger === 'hover') this.show = false;
  };

  private handleClick = () => {
    if (this.trigger === 'click') this.show = !this.show;
  };

  render() {
    return (
      <Host>
        <div
          class="tooltip-trigger"
          ref={ref => (this.triggerElement = ref)}
          onMouseEnter={this.handleMouseEnter}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleClick}
        >
          <slot></slot>
        </div>
        <div
          class={{
            'tooltip-inner': true,
            [`is-${this.color}`]: Boolean(this.color),
          }}
          ref={ref => (this.popoverElement = ref)}
          data-show={this.show}
        >
          <div class="tooltip-content">
            <slot name="tooltip-content" />
          </div>
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </Host>
    );
  }
}

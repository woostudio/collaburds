import { Component, Prop, h, JSX, ComponentInterface, Event, EventEmitter } from '@stencil/core';

/**
 * Dropdown
 * @slot - Content
 * @slot trigger - Trigger Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-dropdown',
  styleUrls: ['dropdown.scss'],
})
export class Dropdown implements ComponentInterface {
  private dropdownMenuElement: HTMLElement;
  private ticking = false;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * The dropdown visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * Align the dropdown to the right
   */
  @Prop() right = false;

  /**
   * Align the dropdown to the center
   */
  @Prop() center = false;

  /**
   * Dropdown menu that appears above the dropdown button
   */
  @Prop() up = false;

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop() hoverable = false;

  /**
   * Fullwidth
   */
  @Prop() fullwidth = false;

  /**
   * show/hide state updated
   */
  @Event() updated: EventEmitter;

  /**
   * Handle Trigger click action
   */
  private handleTriggerClick = (): void => {
    this.active = !this.active;
    this.updated.emit({ active: this.active });
  };

  componentDidLoad() {
    this.preventOutside();
    window.addEventListener('resize', () => {
      // prevent throttling
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.preventOutside();
        });

        this.ticking = true;
      }
    });

    // on hover
  }
  componentDidRender() {
    this.preventOutside();
  }
  // prevent dropdown menu sitting outside of the view port
  preventOutside = () => {
    const bound = this.dropdownMenuElement.getBoundingClientRect();
    // fullwidth
    if (!this.fullwidth) {
      // overlapse to left
      if (bound.left < 0) {
        this.center = false;
      }
    }

    this.ticking = true;
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          dropdown: true,
          'is-active': this.active,
          'is-right': this.right,
          'is-up': this.up,
          'is-center': this.center,
          'is-hoverable': this.hoverable,
          'is-fullwidth': this.fullwidth,
        }}
      >
        <div onClick={this.handleTriggerClick} class="dropdown-trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div
          class="dropdown-menu"
          role="menu"
          ref={ref => {
            this.dropdownMenuElement = ref;
          }}
        >
          <div class="dropdown-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

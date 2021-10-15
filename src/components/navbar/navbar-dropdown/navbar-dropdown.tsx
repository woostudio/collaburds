import {
  Component,
  h,
  Prop,
  ComponentInterface,
  Event,
  EventEmitter,
  Host,
  Element,
} from '@stencil/core';

/**
 * Navbar Dropdown
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-navbar-dropdown',
})
export class NavbarItem implements ComponentInterface {
  private dropdownElement: HTMLElement;
  /**
   * Heading
   */
  @Prop() heading: string;

  /**
   * Size
   */
  @Prop() size: 'normal' | 'large' | 'fullwidth' = 'normal';

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop() hoverable = false;

  /**
   * Is Tab style
   */
  @Prop() isTab: boolean;

  /**
   * The dropdown visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * Dropdown Position
   */
  @Prop() position: 'left' | 'right' | 'center' = 'left';

  /**
   * On Updated Event
   */
  @Event() updated: EventEmitter;

  @Element() el: HTMLElement;

  componentDidLoad() {
    // close dropdown if clicking outside of dropdown area
    window.document.addEventListener('click', (e: CustomEvent) => {
      if (!this.hoverable) {
        const target = e.target as HTMLElement;

        if (!this.el.contains(target)) {
          this.active = false;

          this.updated.emit({ active: this.active });
        }
      }
    });
  }
  clickHandle = (e: MouseEvent) => {
    e.preventDefault();
    if (!this.hoverable) {
      this.active = !this.active;

      this.updated.emit({ active: this.active });
    }
  };
  mouseEnterHandle = () => {
    if (this.hoverable) {
      this.updated.emit({ active: true });
    }
  };
  autoDropdownPosition = () => {
    const rec = this.dropdownElement.getBoundingClientRect();
    if (rec.left < 0) {
      this.position = 'left';
    }
  };
  render() {
    return (
      <Host
        class={{
          [`size-${this.size}`]: Boolean(this.size),
          'navbar-item': true,
          'has-dropdown': true,
          'is-hoverable': this.hoverable,
          'is-active': this.active,
        }}
      >
        <a class="navbar-link" onClick={this.clickHandle} onMouseEnter={this.mouseEnterHandle}>
          {this.heading}
        </a>
        <div
          class={{
            'navbar-dropdown': true,
            [`is-${this.position}`]: Boolean(this.position) && this.size !== 'fullwidth',
          }}
          ref={ref => (this.dropdownElement = ref)}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}

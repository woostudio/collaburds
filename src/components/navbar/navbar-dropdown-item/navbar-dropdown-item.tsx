import {
  Component,
  Prop,
  h,
  ComponentInterface,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';
import { iconProp, colorProp } from '../../../core/types';

/**
 * Navbar Dropdown Item
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-navbar-dropdown-item',
})
export class NavbarItem implements ComponentInterface {
  /**
   * Heading
   */
  @Prop() heading: string;

  /**
   * Description
   */
  @Prop() description: string;

  /**
   * Heading
   */
  @Prop() link: string;

  /**
   * Icon
   */
  @Prop() icon: iconProp;

  /**
   * Icon Color
   */
  @Prop() iconColor: colorProp;

  /**
   * Icon Background Style
   */
  @Prop() iconBackgroundStyle: 'transparent' | 'solid' | 'light' = 'transparent';

  /**
   * Layout
   */
  @Prop() layout: 'horizontal' | 'stack' = 'horizontal';

  @Element() el: HTMLElement;

  /**
   * On Click Event
   */
  @Event() clicked: EventEmitter;

  componentDidLoad() {
    const slot = this.el.querySelector<HTMLElement>('.navbar-item-slot');
    if (slot?.childElementCount == 0) {
      slot.remove();
    }
  }

  clickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.clicked.emit();
  };
  render() {
    const Tag = !!this.link ? 'a' : 'div';

    return (
      <Tag
        href={this.link}
        class={{
          'navbar-dropdown-item': true,
        }}
        onClick={this.clickHandle}
      >
        <div
          class={{
            'navbar-dropdown-item-inner': true,
            'align-center': !this.description,
            [`layout-${this.layout}`]: Boolean(this.layout),
          }}
        >
          {!!this.icon && (
            <div class="navbar-dropdown-item-start">
              <div
                class={{
                  'navbar-icon-wrapper': true,
                  [`icon-${this.iconColor}`]: Boolean(this.iconColor),
                  [`icon-bg-${this.iconBackgroundStyle}`]: Boolean(this.iconBackgroundStyle),
                }}
              >
                <cds-icon icon={this.icon}></cds-icon>
              </div>
            </div>
          )}

          <div class="navbar-dropdown-item-end">
            {(!!this.heading || !!this.description) && (
              <div class="navbar-dropdown-item-content">
                {!!this.heading && (
                  <h6
                    class={{
                      'navbar-dropdown-item-heading': true,
                    }}
                  >
                    {this.heading}
                  </h6>
                )}

                {!!this.description && (
                  <p class="navbar-dropdown-item-description marginless">{this.description}</p>
                )}
              </div>
            )}
            <div class="navbar-dropdown-item-slot">
              <slot></slot>
            </div>
          </div>
        </div>
      </Tag>
    );
  }
}

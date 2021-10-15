import { Component, Prop, h, JSX, ComponentInterface, Element } from '@stencil/core';
import smoothscroll from 'smoothscroll-polyfill';
import { backToTopFloatProps, iconProp, colorProp } from '../../core/types';

/**
 * Back to Top
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-back-to-top',
  styleUrls: ['back-to-top.scss'],
})
export class BackToTop implements ComponentInterface {
  private customContent = false;
  private ticking = false;
  private show = false;
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Float Position
   */
  @Prop() floatPosition: backToTopFloatProps;

  /**
   * Icon
   */
  @Prop() icon: iconProp;

  /**
   * Color
   */
  @Prop() color: colorProp = 'dark';

  /**
   * Light
   */
  @Prop() light: boolean;

  @Element() el: HTMLElement;

  componentDidLoad() {
    // init polifil scroll
    smoothscroll.polyfill();
    const customContentElement = this.el.querySelector('.custom-content');
    this.customContent = customContentElement.childElementCount > 0;

    this.updateButtonState(window.scrollY);

    // detect scroll
    window.addEventListener('scroll', () => {
      // prevent throttling
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateButtonState(window.scrollY);
        });

        this.ticking = true;
      }
    });
  }
  updateButtonState = (scrollY: number) => {
    if (scrollY > 10 && !this.show) {
      this.show = true;
      this.el.classList.add('show');
    } else if (scrollY <= 10 && this.show) {
      this.show = false;
      this.el.classList.remove('show');
    }

    this.ticking = false;
  };
  handleClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          'back-to-top': true,
          [this.class]: Boolean(this.class),
          float: Boolean(this.floatPosition),
          [this.floatPosition]: Boolean(this.floatPosition),
          [`is-${this.color}`]: Boolean(this.color),
          'is-light': this.light,
          'custom-content': this.customContent,
        }}
        onClick={this.handleClick}
      >
        {!!this.icon && <cds-icon icon={this.icon} size="medium"></cds-icon>}
        <div class="custom-content">
          <slot />
        </div>
      </div>
    );
  }
}

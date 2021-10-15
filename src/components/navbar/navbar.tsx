import { Component, Prop, h, JSX, ComponentInterface, Element } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * Navbar
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-navbar',
  styleUrls: ['navbar.scss'],
})
export class Navbar implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Transparent
   */
  @Prop() transparent = false;

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Fixed position
   */
  @Prop() fixedPosition: 'is-fixed-top' | 'is-fixed-bottom';

  /**
   * Spaced
   */
  @Prop() spaced = false;

  /**
   * Logo Image
   * @imageUploader
   * @imageMaxWidth 500px
   * @imageMaxHeight 500px
   * @imageMinWidth 300px
   * @imageMinHeight 300px
   * @imageExt .jpg, .png
   */
  @Prop() logoImage: string;

  /**
   * Logo Link
   */
  @Prop() logoLink: string;

  /**
   * Mobile Menu Open
   */
  @Prop({
    reflect: true,
    mutable: true,
  })
  mobileMenuOpen = false;

  @Element() el: HTMLElement;

  componentDidLoad() {
    this.updateMobileMenu();
  }
  componentDidRender() {
    // set body fixed class
    if (!!this.fixedPosition) {
      document.body.classList.add(this.getBodyFixedClass());
    }
  }
  mobileMenuClickHandle = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.updateMobileMenu();
  };
  updateMobileMenu = () => {
    this.el.querySelectorAll('.navbar-menu').forEach(element => {
      element.classList.toggle('is-active', this.mobileMenuOpen);
    });
  };

  getBodyFixedClass = () => {
    let classname = '';
    switch (this.fixedPosition) {
      case 'is-fixed-top':
        classname = 'has-navbar-fixed-top';
        break;
      case 'is-fixed-bottom':
        classname = 'has-navbar-fixed-bottom';
        break;
    }
    return classname;
  };

  render(): JSX.Element {
    return (
      <nav
        class={{
          navbar: true,
          'is-spaced': this.spaced,
          'is-transparent': this.transparent,
          [`is-${this.color}`]: Boolean(this.color),
          [this.fixedPosition]: Boolean(this.fixedPosition),
          [this.class]: Boolean(this.class),
        }}
        role="navigation"
        aria-label="main navigation"
      >
        {!!this.logoImage && (
          <div class="navbar-brand">
            <a class="navbar-item" href={this.logoLink}>
              <img src={this.logoImage} />
            </a>
            <a
              role="button"
              class={{
                'navbar-burger': true,
                'is-active': this.mobileMenuOpen,
              }}
              aria-label="menu"
              aria-expanded={this.mobileMenuOpen}
              onClick={this.mobileMenuClickHandle}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        )}
        <slot></slot>
      </nav>
    );
  }
}

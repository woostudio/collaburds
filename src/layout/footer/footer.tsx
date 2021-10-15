import { Component, Prop, h, JSX, Host, ComponentInterface, State, Watch } from '@stencil/core';
import { footerLayoutProps, footerDisclaimerPositionProps, iconProp } from '../../core/types';

export type FooterLinkItem = {
  text: string;
  link: string;
};
export type LinkListItem = {
  text: string;
  link?: string;
  links: FooterLinkItem[];
};
export type LinksProp = LinkListItem[];

export type SocialLinkItem = {
  icon: iconProp;
  link: string;
};
export type SocialLinkProp = SocialLinkItem[];

/**
 * Footer
 * @slot - Content
 * @category Layout
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-footer',
  styleUrls: ['footer.scss'],
})
export class Footer implements ComponentInterface {
  @State() _socialLinks: SocialLinkProp = [];
  @State() _links: LinksProp = [];
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: 'dark' | 'white' = 'white';

  /**
   * layout
   */
  @Prop() layout: footerLayoutProps = 'content-left';

  /**
   * Social Links Position
   */
  @Prop() disclaimerPosition: footerDisclaimerPositionProps = 'left';

  /**
   * Disclaimer
   */
  @Prop() disclaimer: string;

  /**
   * Links
   */
  @Prop() links: string;

  /**
   * Social Links
   */
  @Prop() socialLinks: string;

  /**
   * Social Links below footer content box
   */
  @Prop() socialBelowContent = false;

  @Watch('socialLinks')
  socialLinksHandle(newValue: string) {
    try {
      this._socialLinks = JSON.parse(newValue);
    } catch (error) {
      console.log('social-links: Invalid json string format');
      console.log(error);
    }
  }
  @Watch('links')
  linksHandle(newValue: string) {
    try {
      this._links = JSON.parse(newValue);
    } catch (error) {
      console.log('links: Invalid json string format');
      console.log(error);
    }
  }

  componentWillLoad() {
    if (!!this.socialLinks) {
      this.socialLinksHandle(this.socialLinks);
    }
    if (!!this.links) {
      this.linksHandle(this.links);
    }
  }
  renderSocialLinks = () => {
    if (this.socialLinks.length) {
      return (
        <div class="footer-socials">
          {this._socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" role="link">
              <cds-icon icon={social.icon}></cds-icon>
            </a>
          ))}
        </div>
      );
    }
    return null;
  };
  renderSimpleLinks = () => {
    if (this.links.length) {
      return (
        <div class="footer-simple-links">
          {this._links.map((item, i) => (
            <a key={i} href={item.link} role="link">
              {item.text}
            </a>
          ))}
        </div>
      );
    }
    return null;
  };
  renderLinkColumn = (column: LinkListItem, i: number) => {
    return (
      <div key={i} class="footer-column">
        <h6 class="footer-column-heading">{column.text}</h6>
        <ul>
          {column.links.map((item, i) => (
            <li key={i}>
              <a href={item.link} class="footer-column-link" role="link">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  render(): JSX.Element {
    return (
      <Host>
        <footer
          class={{
            footer: true,
            [this.class]: Boolean(this.class),
            [this.layout]: Boolean(this.layout),
            [this.color]: Boolean(this.color),
          }}
        >
          {/* main content */}
          {this.layout !== 'simple-center' && this.layout !== 'social-link-only' && (
            <div>
              <div class="footer-main">
                <div class="footer-slot">
                  <slot></slot>
                  {this.socialBelowContent && (
                    <div class="footer-disclaimer-social">{this.renderSocialLinks()}</div>
                  )}
                </div>
                {/* Link Columns */}
                <div class="footer-columns">
                  {this._links.map((column, i) => this.renderLinkColumn(column, i))}
                </div>
              </div>
              <div class="footer-divider"></div>
            </div>
          )}
          {/* simple centered */}
          {this.layout === 'simple-center' && this.renderSimpleLinks()}
          {/* disclaimer & social icons */}
          <div
            class={{
              'footer-disclaimer': true,
              [this.disclaimerPosition]: Boolean(this.disclaimerPosition),
            }}
          >
            <div class="footer-disclaimer-text">{this.disclaimer}</div>
            {!this.socialBelowContent && (
              <div class="footer-disclaimer-social">{this.renderSocialLinks()}</div>
            )}
          </div>
        </footer>
      </Host>
    );
  }
}

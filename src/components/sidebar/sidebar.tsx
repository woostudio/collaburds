import { Component, h, State, Prop, Watch, Element, ComponentInterface } from '@stencil/core';

export interface SubnavItem {
  title?: string;
  path?: string;
  parent?: string;
  order?: number;
  items?: SubnavItem[];
}

/**
 * Sidebar
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-sidebar',
  styleUrl: 'sidebar.scss',
})
export class Sidebar implements ComponentInterface {
  @State() _subnavGroups: SubnavItem[] = [];

  @Element() el: HTMLElement;

  /**
   * Slide out duration
   **/
  @Prop() slideoutDuration = 200;

  /**
   * Title
   **/
  @Prop() subnavTitle: string;

  /**
   * Subnav
   **/
  @Prop() subnav: string;

  /**
   * Active Subnav Item path
   **/
  @Prop() activeItemPath: string;

  /**
   * Logo image path
   * @imageUploader
   * @imageMaxWidth 500px
   * @imageMaxHeight 500px
   * @imageMinWidth 300px
   * @imageMinHeight 300px
   * @imageExt .jpg, .png
   */
  @Prop() logoPath: string;

  /**
   * Logo href
   */
  @Prop() logoHref: string;

  @State() slideoutState = 'closed';

  @Watch('subnav')
  subnavGroupsHandler(groups: string) {
    this._subnavGroups = JSON.parse(groups);
  }

  slideoutToggleHandler(event) {
    event.preventDefault();

    if (this.slideoutState === 'closed') {
      this.slideoutState = 'opening';
      setTimeout(() => {
        this.slideoutState = 'open';
        document.body.classList.add('noscroll-touch');
      }, this.slideoutDuration);
    } else if (this.slideoutState === 'open') {
      this.slideoutState = 'closing';
      setTimeout(() => {
        this.slideoutState = 'closed';
        document.body.classList.remove('noscroll-touch');
      }, this.slideoutDuration);
    }
  }

  componentWillLoad() {
    this.subnavGroupsHandler(this.subnav);

    if (this.slideoutDuration) {
      const cssDuration = `${this.slideoutDuration / 1000}s`;
      this.el.style.setProperty('--slideout-duration', cssDuration);
    }
  }

  disconnectedCallback() {
    document.body.classList.remove('noscroll-touch');
  }

  render() {
    return (
      <div
        class={{
          'cds-sidebar': true,
          open: this.slideoutState === 'open',
          closed: this.slideoutState === 'closed',
          opening: this.slideoutState === 'opening',
          closing: this.slideoutState === 'closing',
        }}
      >
        <div class="cds-sidebar-inner">
          <a class="has-text-white ww-logo" href={this.logoHref}>
            <img src={this.logoPath}></img>
          </a>
          <a class="has-text-white menu" onClick={(event) => this.slideoutToggleHandler(event)}>
            <cds-icon icon="menu" size="small"></cds-icon>
          </a>
          {/* <a class="has-text-white search">
            <i class="far fa-search"></i>
          </a> */}
        </div>
        <div class="cds-sidebar-slideout">
          <button
            class="cds-sidebar-slideout-dismiss"
            onClick={(event) => this.slideoutToggleHandler(event)}
          ></button>
          <div class="cds-sidebar-slideout-inner">
            <div class="cds-sidebar-subnav">
              {this.subnavTitle && <h2>{this.subnavTitle}</h2>}
              <cds-menu
                subnav={JSON.stringify(this._subnavGroups)}
                active-item-path={this.activeItemPath}
              ></cds-menu>
            </div>
          </div>
        </div>
        <div
          class="cds-sidebar-overlay"
          onClick={(event) => this.slideoutToggleHandler(event)}
        ></div>
      </div>
    );
  }
}

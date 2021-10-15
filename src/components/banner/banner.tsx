import { Prop, h, Component, ComponentInterface, Event, EventEmitter } from '@stencil/core';
import { colorProp, buttonColorProp } from '../../core/types';

/**
 * Banner
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-banner',
  styleUrls: ['banner.scss'],
})
export class Banner implements ComponentInterface {
  /**
   * CSS Class
   */
  @Prop() class: string;

  /**
   * Show
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  show = true;

  /**
   * Position
   */
  @Prop() position: 'float-top' | 'float-bottom' | 'fixed-top' | 'fixed-bottom' = 'fixed-top';

  /**
   * color
   */
  @Prop() color: colorProp;

  /**
   * Is Light
   */
  @Prop() light: boolean;

  /**
   * Action Text
   */
  @Prop() actionText: string;

  /**
   * Action Link
   */
  @Prop() actionLink: string;

  /**
   * Action Color
   */
  @Prop() actionColor: buttonColorProp;

  /**
   * On Action Clicked
   */
  @Event() actionClicked: EventEmitter;

  closeClickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.show = false;
  };

  actionClickHandle = (_e: CustomEvent) => {
    this.actionClicked.emit();
  };

  render() {
    return (
      <div
        class={{
          banner: true,
          [this.class]: Boolean(this.class),
          show: this.show,
          [this.position]: Boolean(this.position),
          [`is-${this.color}`]: Boolean(this.color),
          'is-light': this.light,
        }}
      >
        <div class="banner-inner">
          <div class="banner-content">
            <div class="banner-icon">
              <cds-icon icon="check"></cds-icon>
            </div>
            <slot></slot>
          </div>
          {!!this.actionText && (
            <div class="banner-action">
              <cds-button
                color={this.actionColor}
                fullwidth={true}
                onClicked={this.actionClickHandle}
                href={this.actionLink}
                tag={!!this.actionLink ? 'a' : 'button'}
              >
                {this.actionText}
              </cds-button>
            </div>
          )}
          <a href="#" class="banner-close" onClick={this.closeClickHandle}>
            <cds-icon icon="x"></cds-icon>
          </a>
        </div>
      </div>
    );
  }
}

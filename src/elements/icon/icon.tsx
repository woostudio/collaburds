import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';
import SVGInject from '@iconfu/svg-inject';
import { colorProp, iconProp } from '../../core/types';

/**
 * Icon
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-icon',
  styleUrls: ['icon.scss'],
})
export class Icon implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Icon name (svg file name)
   */
  @Prop() icon: iconProp;

  imgSvgEl: HTMLElement;

  componentDidLoad() {
    SVGInject(this.imgSvgEl);
  }

  render(): JSX.Element {
    const iconSrc = `/assets/icons/${this.icon}.svg`;
    return (
      <Host
        class={{
          icon: true,
          [`has-text-${this.color}`]: Boolean(this.color),
          [`is-${this.size}`]: Boolean(this.size),
          [this.class]: Boolean(this.class),
        }}
      >
        {this.icon && (
          <img
            ref={el => (this.imgSvgEl = el as HTMLElement)}
            class="cds-icon-img-svg"
            src={iconSrc}
          />
        )}
      </Host>
    );
  }
}

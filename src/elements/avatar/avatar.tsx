import { Component, Prop, h, ComponentInterface } from '@stencil/core';
import { imageSizeProps, colorProp, iconProp } from '../../core/types';

/**
 * Avatar
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-avatar',
  styleUrls: ['avatar.scss'],
})
export class Avatar implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;
  /**
   * Size
   */
  @Prop() size: imageSizeProps = '128x128';

  /**
   * Avatar initials
   */
  @Prop() initials: string;

  /**
   * Avatar image
   * @imageUploader
   * @imageMaxWidth 300px
   * @imageMaxHeight 300px
   * @imageMinWidth 150px
   * @imageMinHeight 150px
   * @imageExt .jpg, .png
   */
  @Prop() image: string;

  /**
   * Avatar icon
   */
  @Prop() icon: iconProp;

  /**
   * background color
   */
  @Prop() background: colorProp = 'light';

  render() {
    return (
      <figure
        class={{
          [this.class]: Boolean(this.class),
          'cds-avatar': true,
          image: true,
          [`is-${this.size}`]: Boolean(this.size),
          [`is-${this.background}`]: Boolean(this.background),
        }}
      >
        {!!this.image && (
          <img
            class="is-rounded"
            src={this.image}
            alt="avatar picture"
            onError={() => {
              this.image = '';
            }}
          />
        )}
        {!!this.icon && !this.image && <cds-icon icon={this.icon}></cds-icon>}
        {!this.image && !this.icon && <span class="initials">{this.initials}</span>}
      </figure>
    );
  }
}

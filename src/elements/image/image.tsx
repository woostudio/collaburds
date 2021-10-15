import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { imageRatioProps, imageSizeProps } from '../../core/types';

/**
 * Image
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-image',
  styleUrls: ['image.scss'],
})
export class Image implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Size
   */
  @Prop() size: imageSizeProps;

  /**
   * Ratio
   */
  @Prop() ratio: imageRatioProps;

  render(): JSX.Element {
    return (
      <figure
        class={{
          image: true,
          [`is-${this.size}`]: Boolean(this.size),
          [`is-{this.ratio}`]: Boolean(this.ratio),
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </figure>
    );
  }
}

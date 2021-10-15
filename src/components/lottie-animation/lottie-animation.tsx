import { Component, Element, Prop, h, ComponentInterface } from '@stencil/core';
import lottie from 'lottie-web/build/player/lottie_light';

/**
 * Lottie Animation
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-lottie-animation',
  styleUrls: ['lottie-animation.scss'],
})
export class LottieAnimation implements ComponentInterface {
  /**
   * Path to animation JSON file
   */
  @Prop() animationPath: string;

  /**
   * Loop option
   */
  @Prop() loop = true;

  /**
   * Autoplay option
   */
  @Prop() autoplay = true;

  /**
   * Height
   */
  @Prop() height: string;

  /**
   * Width
   */
  @Prop() width: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    if (this.height) {
      this.el.style.setProperty('--height', this.height);
    }
    if (this.width) {
      this.el.style.setProperty('--width', this.width);
    }
  }

  componentDidLoad() {
    if (Boolean(this.animationPath)) {
      lottie.loadAnimation({
        container: this.el.getElementsByClassName('lottie-wrapper')[0],
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        path: this.animationPath,
        rendererSettings: {
          viewBoxOnly: true,
        },
      });
    }
  }

  render() {
    return <div class="lottie-wrapper"></div>;
  }
}

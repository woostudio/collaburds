import { Component, Prop, h, Element, ComponentInterface, Host } from '@stencil/core';

/**
 * Skeleton
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-skeleton',
  styleUrl: 'skeleton.scss',
})
export class Skeleton implements ComponentInterface {
  /**
   * The number of times the skeleton element should be repeated
   */
  @Prop() count = 1;

  /**
   * Animation duration
   */
  @Prop() duration = 1.2;

  /**
   * Width
   */
  @Prop() width: string;

  /**
   * Height
   */
  @Prop() height: string;

  /**
   * Display as a circle
   */
  @Prop() circle = false;

  /**
   * Display squared
   */
  @Prop() squared = false;

  /**
   * Base color
   */
  @Prop() color: string;

  /**
   * Highlight color
   */
  @Prop() highlightColor: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    if (this.color) {
      this.el.style.setProperty('--base-color', this.color);
    }
    if (this.highlightColor) {
      this.el.style.setProperty('--highlight-color', this.highlightColor);
    }
  }

  render() {
    const elements = [];

    for (let i = 0; i < this.count; i++) {
      const style = {
        animation: `skeleton ${String(this.duration)}s ease-in-out infinite`,
      } as any;

      if (this.width !== null) {
        style.width = this.width;
      }

      if (this.height !== null) {
        style.height = this.height;
      }

      if (this.width !== null && this.height !== null && this.circle) {
        style.borderRadius = '50%';
        style.verticalAlign = 'inherit';
      }

      if (this.squared) {
        style.borderRadius = '0';
      }

      elements.push(
        <span key={i} class="skeleton" style={style}>
          &zwnj;
        </span>
      );
    }

    return <Host>{elements}</Host>;
  }
}

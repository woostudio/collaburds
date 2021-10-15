import { Component, h, Prop, ComponentInterface } from '@stencil/core';
import { iconProp, colorProp } from '../../../core/types';

/**
 * Feature Item
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-feature-item',
  styleUrls: ['feature-item.scss'],
})
export class FeatureItem implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * heading
   */
  @Prop() heading: string;

  /**
   * description
   */
  @Prop() description: string;

  /**
   * icon
   */
  @Prop() icon: iconProp;

  /**
   * icon color
   */
  @Prop() iconColor: colorProp = 'secondary';

  /**
   * icon size
   */
  @Prop() iconSize: 'small' | 'medium' | 'large';

  /**
   * icon inverted
   */
  @Prop() iconInverted: boolean;

  /**
   * icon outlined
   */
  @Prop() iconOutlined: boolean;

  /**
   * icon light
   */
  @Prop() iconLight: boolean;

  /**
   * is icon background
   */
  @Prop() iconWithBackground: boolean;

  /**
   * layout
   */
  @Prop() layout: 'stack' | 'stack-center' | 'horizontal' = 'horizontal';

  render() {
    return (
      <div
        class={{
          'feature-item': true,
          [`layout-${this.layout}`]: Boolean(this.layout),
          'heading-only': !this.description,
          [this.class]: Boolean(this.class),
        }}
      >
        {!!this.icon && (
          <div
            class={{
              'feature-item-icon': true,
              [`is-${this.iconColor}`]: Boolean(this.iconColor),
              'icon-background': this.iconWithBackground,
              'is-inverted': this.iconInverted,
              'is-outlined': this.iconOutlined,
              'is-light': this.iconLight,
            }}
          >
            <cds-icon icon={this.icon}></cds-icon>
          </div>
        )}
        {(!!this.heading || !!this.description) && (
          <div class="feature-item-content">
            {!!this.heading && <cds-heading size="6">{this.heading}</cds-heading>}
            {!!this.description && <div class="feature-item-description">{this.description}</div>}
          </div>
        )}
      </div>
    );
  }
}

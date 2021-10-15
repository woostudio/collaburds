import { Component, h, Prop, ComponentInterface } from '@stencil/core';
import { textColorProp, typographySizeProp } from '../../../core/types';

/**
 * Stats Item
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-stats-item',
  styleUrls: ['stats-item.scss'],
})
export class StatsItem implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Value Sizes
   */
  @Prop() valueSize: typographySizeProp = '1';

  /**
   * Value Color
   */
  @Prop() valueColor: textColorProp = 'primary';

  /**
   * Metric
   */
  @Prop() metric: string;

  /**
   * Metric Sizes
   */
  @Prop() metricSize: typographySizeProp = '6';

  /**
   * Metric Color
   */
  @Prop() metricColor: textColorProp;

  /**
   * Align
   */
  @Prop() align: 'left' | 'right' | 'center' = 'center';

  /**
   * Align
   */
  @Prop() reversed: boolean;

  render() {
    return (
      <div
        class={{
          'stats-item': true,
          [this.class]: Boolean(this.class),
          reversed: this.reversed,
          [`align-${this.align}`]: Boolean(this.align),
        }}
      >
        <div class="stats-item-inner">
          <div
            class={{
              'stats-item-value': true,
              [`has-text-${this.valueColor}`]: Boolean(this.valueColor),
              [`is-size-${this.valueSize}`]: Boolean(this.valueSize),
            }}
          >
            <slot></slot>
          </div>
          {!!this.metric && (
            <h6
              class={{
                'stats-item-metric': true,
                [`has-text-${this.metricColor}`]: Boolean(this.metricColor),
                [`is-size-${this.metricSize}`]: Boolean(this.metricSize),
              }}
            >
              {this.metric}
            </h6>
          )}
        </div>
      </div>
    );
  }
}

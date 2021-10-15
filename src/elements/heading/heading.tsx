import { Component, Prop, h, ComponentInterface } from '@stencil/core';
import {
  headingSizeProp,
  textColorProp,
  textAlignmentProp,
  textTransformationProp,
  textFontFamilieProp,
  textWeightProp,
} from '../../core/types';

/**
 * Heading
 * @slot - Content
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-heading',
  styleUrls: ['heading.scss'],
})
export class Heading implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Size
   */
  @Prop() size: headingSizeProp = '6';

  /**
   * Is Subtitle
   */
  @Prop() subtitle: boolean;

  /**
   * No Margin
   */
  @Prop() noMargin: boolean;

  /**
   * Color
   */
  @Prop() color: textColorProp;

  /**
   * Alignment
   */
  @Prop() align: textAlignmentProp;

  /**
   * Transform
   */
  @Prop() transform: textTransformationProp;

  /**
   * Font Weight
   */
  @Prop() weight: textWeightProp = 'bold';

  /**
   * Font Family
   */
  @Prop() fontFamily: textFontFamilieProp;

  render() {
    const Tag = `h${this.size}`;
    const classname = `is-size-${this.size}`;
    const colorClass = !!this.color ? `has-text-${this.color}` : '';
    const alignmentClass = !!this.align ? `has-text-${this.align}` : '';
    const transformClass = !!this.transform ? `is-${this.transform}` : '';
    const weightClass = !!this.weight ? `has-text-weight-${this.weight}` : '';
    const fontFamilyClass = !!this.fontFamily ? `is-family-${this.fontFamily}` : '';

    return (
      <Tag
        class={{
          title: !this.subtitle,
          subtitle: this.subtitle,
          [colorClass]: true,
          [classname]: true,
          [alignmentClass]: true,
          [transformClass]: true,
          [weightClass]: true,
          [fontFamilyClass]: true,
          [this.class]: Boolean(this.class),
          'is-marginless': this.noMargin,
        }}
      >
        {' '}
        <slot></slot>
      </Tag>
    );
  }
}

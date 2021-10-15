import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

/**
 * Panel
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-panel',
  styleUrls: ['panel.scss'],
})
export class Panel implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <nav class="panel">
        <slot />
      </nav>
    );
  }
}
